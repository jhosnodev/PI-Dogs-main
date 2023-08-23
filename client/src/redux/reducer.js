const initialState = {
    dogs: [],
    fav: [],
    temps: [],
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DOGS':
            //asdas 
            break;
    
        default:
            return { ...state };
    }
}
export default reducer;
