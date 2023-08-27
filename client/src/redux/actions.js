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
      const {data} = await axios(`${enpointLocal}temperaments`)
      return dispatch({ type: "GET_TEMPERAMENTS", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
