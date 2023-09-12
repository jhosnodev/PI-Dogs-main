const initialState = {
  allDogs: [],
  dogs: [],
  favs: [],
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
        dogs: action.payload,
      };
    case "CLEAR_GET_DOG_BY_NAME":
      return {
        ...state,
        dogs: action.payload,
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
    case "ADD_FAV":
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload),
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
        dogs: state.allDogs,
      };
    case "FILTER_TEMP":
      return {
        ...state,
        dogs:
          action.payload === "all"
            ? state.allDogs
            : Object.values(state.dogs).filter((dog) =>
                Object.values(dog["temperaments"])
                  .map((temp) => temp.name)
                  .includes(action.payload)
              ),
      };
    case "FILTER_SOURCE":
      return {
        ...state,
        dogs:
          action.payload === "cloud"
            ? Object.values(state.dogs).filter(
                (dog) => typeof dog.id === "number"
              )
            : Object.values(state.dogs).filter(
                (dog) => typeof dog.id === "string"
              ),
      };
    case "ORDER_ALPHA":
      return {
        ...state,
        dogs:
          action.payload === "as"
            ? Object.values(state.dogs).sort((a, b) =>
                a.name.localeCompare(b.name)
              )
            : Object.values(state.dogs)
                .sort((a, b) => a.name.localeCompare(b.name))
                .reverse(),
      };
    case "ORDER_NUMBER":
      return {
        ...state,
        dogs: Object.values(state.dogs).sort((a, b) =>
          action.payload === "as"
            ? a.weight.split(" - ")[0] - b.weight.split(" - ")[0]
            : b.weight.split(" - ")[0] - a.weight.split(" - ")[0]
        ),
      };
    case "SET_ALERT":
      return {
        ...state,
        alert: action.payload,
      };
    case "CLEAR_ALERT":
      return {
        ...state,
        alert: {},
      };
    default:
      return { ...state };
  }
};
export default reducer;
