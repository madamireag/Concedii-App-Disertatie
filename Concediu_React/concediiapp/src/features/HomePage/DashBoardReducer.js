export const initialState = {
  holidayTypeId: 0,
  holidayStatusId: 0,
};
export function DashBoardReducer(state, action) {
  const { propertyName, value } = action;
  switch (action.type) {
    case "OnPropertyChange":
      return { ...state, [propertyName]: value };
    default:
      return state;
  }
}
