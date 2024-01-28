import { extractDataNastereFromCnp } from "./extractDataNastereFromCnp";
export function validareNume(nume) {
  let isValid = true;
  let message;
  if (
    nume === "" ||
    nume === null ||
    nume === undefined ||
    nume === "def" ||
    !nume.match(/^[a-zA-Z]+$/)
  ) {
    isValid = false;
    message = "Introduceti un nume valid!";
  }

  return { valid: isValid, err: message };
}
export function validarePrenume(prenume) {
  let isValid = true;
  let message;
  if (
    prenume === "" ||
    prenume === null ||
    prenume === undefined ||
    !prenume.match(/^[A-Za-z\s-]+$/)
  ) {
    isValid = false;
    message = "Introduceti un prenume valid!";
  }

  return { valid: isValid, err: message };
}

export function validareEmail(email) {
  let isValid = true;
  let message;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    message = "Email invalid!";
    isValid = false;
  } else {
    isValid = true;
    message = "";
  }
  return { valid: isValid, err: message };
}

export function validareParola(parola) {
  let isValid = true;
  let message;
  var strongRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!strongRegex.test(parola)) {
    message = "Parola invalida!";
    isValid = false;
  } else {
    isValid = true;
    message = "";
  }
  return { valid: isValid, err: message };
}

export function validareSerie(serie) {
  let isValid = true;
  let message;
  if (
    serie.length === 0 ||
    serie === undefined ||
    serie === null ||
    serie.length !== 2 ||
    !serie.match(/^[a-zA-Z]+$/)
  ) {
    isValid = false;
    message = "Seria de buletin trebuie sa contina 2 litere!";
  } else {
    isValid = true;
    message = " ";
  }
  return { valid: isValid, err: message };
}

export function validareNr(nr) {
  let isValid = true;
  let message;
  if (nr === undefined || nr === null || nr.length !== 6) {
    isValid = false;
    message = "Nr de buletin trebuie sa contina 6 cifre!";
  } else {
    isValid = true;
    message = "";
  }
  return { valid: isValid, err: message };
}

export function validarePhone(phone) {
  let isValid = true;
  let message;
  let regex = new RegExp(
    "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
  );
  if (!phone.match(regex)) {
    isValid = false;
    message = "Nr telefon invalid!";
  } else {
    isValid = true;
    message = "";
  }

  return { valid: isValid, err: message };
}
export function verificareDataNastereCnp(cnp) {
  let isValid = false;
  let message = "";
  if (extractDataNastereFromCnp(cnp) !== false) {
    isValid = true;
    message = "";
  } else {
    isValid = false;
    message = "Data nasterii e in viitor!";
  }
  return { valid: isValid, err: message };
}
export function validareCnp(cnp) {
  let isValid = true;
  let message;

  if (cnp.length !== 13) {
    isValid = false;
    message = "Cnp trebuie sa aiba 13 cifre";
  } else if (cnp.substring(7, 9) < 1 || cnp.substring(7, 9) > 52) {
    isValid = false;
    console.log("aici sunt");
    message = "Codul de judet trebuie sa fie intre 1 si 52";
  }
  return { valid: isValid, err: message };
}
