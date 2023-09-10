const initialState = {
  allDogs: [],
  dogs: [],
  fav: [],
  temps: [],
  search: [],
  detail: {},
  filter: {},
  alert: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dogs: action.payload,
        allDogs: action.payload,
      };
    case "GET_DOG_BY_NAME":
      return {
        ...state,
        search: action.payload,
      };
    case "CLEAR_GET_DOG_BY_NAME":
      return {
        ...state,
        search: action.payload,
      };
    case "GET_DOG_BY_ID":
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
    case "RESET_SEARCH":
      return {
        ...state,
        search: [],
      };
    case "FILTER_TEMP":
      return {
        ...state,
        dogs:
          action.payload === "all"
            ? state.allDogs
            : Object.values(state.allDogs).filter((dog) =>
                Object.values(dog["temperaments"])
                  .map((temp) => temp.name)
                  .includes(action.payload)
              ),
      };
    case "FILTER_DATA":
      return {
        ...state,
        dogs:  Object.values(state.allDogs).filter(dog => dog.id.includes('-')),
      };
    case "ORDER_ALPHA":
      return {
        ...state,
        dogs:
          action.payload === "as"
            ? Object.values(state.allDogs).sort((a, b) =>
                a.name.localeCompare(b.name)
              )
            : Object.values(state.allDogs)
                .sort((a, b) => a.name.localeCompare(b.name))
                .reverse(),
      };
    case "ORDER_NUMBER":
      return {
        ...state,
        dogs: Object.values(state.allDogs).sort((a, b) =>
          action.payload === "as" ? a.weight.split(' - ')[0] - b.weight.split(' - ')[0] : b.weight.split(' - ')[0] - a.weight.split(' - ')[0]
        ),
      };

    default:
      return { ...state };
  }
};
export default reducer;
