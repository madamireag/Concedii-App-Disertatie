export function reducer(state, action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        results: action.results,
        totalItems: action.totalItems,
      };
    case "query":
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
}
