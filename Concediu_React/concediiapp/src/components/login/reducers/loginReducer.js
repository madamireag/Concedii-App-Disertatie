export const initialState = {
  userName: null,
  password: null
}

export function reducer(state, action) {
  switch (action.type) {
    case 'OnPropertyChanged':
      return onPropertyChanged(state, action)
    default:
      return state
  }
}

function onPropertyChanged(state, action) {
  const { propertyName, value } = action
  return { ...state, [propertyName]: value }
}
