export function reducer(state, action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        employee: action.employee,
      };
    case "edit":
      return {
        ...state,
        isEditing: action.isEditing,
      };
    case "onchange":
      return {
        ...state,
        employee: { ...state.employee, [action.propname]: action.value },
      };
    case "init":
      return {
        ...state,
        loading: action.loading,
      };
    case "field": {
      //if input name is array
      const inputNameOfZero = action?.inputName[0];
      let objectOfState = state?.[inputNameOfZero];

      let objectOfObject = objectOfState.action?.inputName[1];

      objectOfObject = action?.inputValue;
      objectOfState = {
        ...objectOfState,
        [action?.inputName[1]]: objectOfObject,
      };

      return { ...state, [action?.inputName[0]]: objectOfState };
    }
    default:
      return state;
  }
}
