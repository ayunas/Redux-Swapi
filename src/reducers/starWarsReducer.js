// import /* we need our action types here*/ "../actions";


const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case "FETCH": 
        return {
          ...state,
          fetching: true
        }
      case "SUCCEED":
        return {
          ...state,
          characters : action.payload,
          fetching : false
        }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
