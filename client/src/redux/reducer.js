const initialState = {
  dogs: [],
  fav: [],
  temps: [],
  search: [],
  detail: {},
  response: {},
  alert: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
      };
    case "GET_DOG_BY_NAME":
      return {
        ...state,
        search: action.payload,
      };
    case "GET_DOG_BY_BREED":
      return {
        ...state,
        detail: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temps: action.payload,
      };
    case "ADD_FAVS":
      return {
        ...state,
        temps: action.payload,
      };
    case "REMOVE_FAVS":
      return {
        ...state,
        temps: action.payload,
      };
    case "ADD_DOG":
      return {
        ...state,
        alert: action.payload,
      };
    case "UPDATE_DOG":
      return {
        ...state,
        temps: action.payload,
      };
    case "DELETE_DOG":
      return {
        ...state,
        temps: action.payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
