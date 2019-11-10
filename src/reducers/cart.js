import * as types from "../constant/ActionTypes";
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data : [];
initialState = [];
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);

      return [...state];
    default:
      return [...state];
  }
};

export default cart;
