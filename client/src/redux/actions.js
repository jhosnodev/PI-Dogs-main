import axios from "axios";

const enpointLocal = "http://localhost:3001/";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${enpointLocal}dogs`);
      return dispatch({ type: "GET_DOGS", payload: data });
    } catch (error) {
      return dispatch({ type: "SET_ALERT", payload: error });
    }
  };
};
export const getTemperament = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${enpointLocal}temperaments`);
      return dispatch({ type: "GET_TEMPERAMENTS", payload: data });
    } catch (error) {
      return dispatch({ type: "SET_ALERT", payload: error });
    }
  };
};
export const getDogByName = (name) => {
  return async (dispatch) => {
    try {
      /* http://localhost:3001/dogs/?name=Affenpinscher */
      const { data } = await axios(`${enpointLocal}dogs/?name=${name}`);
      return dispatch({ type: "GET_DOG_BY_NAME", payload: data });
    } catch (error) {
      return dispatch({ type: "SET_ALERT", payload: error });
    }
  };
};
export const getDogByID = (id) => {
  return async (dispatch) => {
    try {
      /* http://localhost:3001/dogs/12 */
      const { data } = await axios(`${enpointLocal}dogs/${id}`);
      return dispatch({ type: "GET_DOG_BY_ID", payload: data[0] });
    } catch (error) {
      return dispatch({ type: "SET_ALERT", payload: error });
    }
  };
};
export const setDog = (info) => {
  return async (dispatch) => {
    try {
      /* http://localhost:3001/dogs/vizsla */
      const res = await axios.post(`${enpointLocal}dogs/`, info);
      return dispatch({ type: "ADD_DOG", payload: res });
    } catch (error) {
      return dispatch({ type: "SET_ALERT", payload: error });
    }
  };
};

export const orderAlpha = (order) => {
  return {
    type: "ORDER_ALPHA",
    payload: order,
  };
};

export const orderNumber = (order) => {
  return {
    type: "ORDER_NUMBER",
    payload: order,
  };
};
export const filterTemps = (temp) => {
  return {
    type: "FILTER_TEMP",
    payload: temp,
  };
};
export const filterSource = (source) => {
  return {
    type: "FILTER_SOURCE",
    payload: source,
  };
};
export const addFav = (doggi) => {
  //const endpointProduction = 'http://'
  return {
    type: "ADD_FAV",
    payload: doggi,
  };
};
export const removeFav = (id) => {
  return {
    type: "REMOVE_FAV",
    payload: id,
  };
};
