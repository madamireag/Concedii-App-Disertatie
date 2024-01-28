export const initialState = {
  results: []
}
export function reducer(state, action) {
  switch (action.type) {
    case 'query':
      return {
        ...state,
        results: action.results
      }
    default:
      return state
  }
}
