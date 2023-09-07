import axios from "axios";

const enpointLocal = "http://localhost:3001/";

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${enpointLocal}dogs`);
      return dispatch({ type: "GET_DOGS", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getTemperament = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios(`${enpointLocal}temperaments`);
      return dispatch({ type: "GET_TEMPERAMENTS", payload: data });
    } catch (error) {
      console.log(error.message);
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
      console.log(error.message);
    }
  };
};
export const getDogByBreed = (breed) => {
  return async (dispatch) => {
    try {
      /* http://localhost:3001/dogs/vizsla */
      const { data } = await axios(`${enpointLocal}dogs/${breed}`);
      return dispatch({ type: "GET_DOG_BY_BREED", payload: data });
    } catch (error) {
      console.log(error.message);
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
      console.log(error.message);
    }
  };
};
