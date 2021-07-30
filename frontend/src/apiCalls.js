import Api from "./config/axios";

export const loginCall = async (userData, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await Api.post("/user/login", userData);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
