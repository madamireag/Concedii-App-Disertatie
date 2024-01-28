export const initialState = {
  nume: "def",
  prenume: "def",
  cnp: "def",
  email: "def",
  parola: "def",
  serie: "de",
  nr: "0",
  phone: "0",
  dataAngajarii: new Date(),
  dataNasterii: new Date(),
  poza: null,
  isValidNume: true,
  isValidPrenume: true,
  isValidCnp: true,
  isValidDataNastere: true,
  isValidDataAngajare: true,
  isValidSerie: true,
  isValidNr: true,
  isValidEmail: true,
  isValidPass: true,
  isValidPhoneNo: true,
  numeErr: "",
  prenumeErr: "",
  cnpErr: "",
  dataNastereErr: "",
  dataAngajareErr: "",
  serieErr: "",
  nrErr: "",
  emailErr: "",
  passErr: "",
  phoneNoErr: "",
};

export function registerReducer(state, action) {
  const { propertyName, value } = action;
  switch (action.type) {
    case "OnPropertyChange":
      return { ...state, [propertyName]: value };
    default:
      return state;
  }
}
