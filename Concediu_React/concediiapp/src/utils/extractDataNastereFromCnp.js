import { format } from "date-fns";

export function extractDataNastereFromCnp(cnp) {
  var an, luna, zi;
  let isValid = true;
  let message = "";
  if (cnp.length === 13) {
    switch (cnp.substring(0, 1)) {
      case "1":
        an = "19" + cnp.substring(1, 3);
        luna = cnp.substring(3, 5);
        zi = cnp.substring(5, 7);
        break;
      case "2":
        an = "19" + cnp.substring(1, 3);
        luna = cnp.substring(3, 5);
        zi = cnp.substring(5, 7);
        break;
      case "5":
        an = "20" + cnp.substring(1, 3);
        luna = cnp.substring(3, 5);
        zi = cnp.substring(5, 7);
        break;
      case "6":
        an = "20" + cnp.substring(1, 3);
        luna = cnp.substring(3, 5);
        zi = cnp.substring(5, 7);
        break;
      default:
    }
    var varsta;
    try {
      var data = new Date(format(new Date(an, luna - 1, zi), "MM/dd/yyyy"));
      varsta = new Date().getFullYear() - data.getFullYear();
    } catch (e) {
      console.log(e);
    }

    if (data > new Date()) {
      isValid = false;
      message = "Data nasterii nu poate fi in viitor";
    } else if (varsta < 18) {
      isValid = false;
      message = "Varsta minima 18 ani!";
    } else {
      isValid = true;
      message = "";
    }
  }
  return { valid: isValid, err: message, data: data };
}
