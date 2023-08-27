const initialState = {
  dogs: [],
  fav: [],
  temps: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
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
        temps: action.payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
