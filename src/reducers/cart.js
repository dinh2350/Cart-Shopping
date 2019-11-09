import * as types from "../constant/ActionTypes";
let data = JSON.parse(localStorage.getItem("CART"));
let initialState = data ? data : [];
initialState = [
  {
    product: {
      id: 1,
      name: "ip",
      image: "../img/gai/g1.jpg",
      description: "product by appel make it",
      price: 500,
      inventory: 10,
      rating: 4
    },
    quantity: 5
  },
  {
    product: {
      id: 3,
      name: "ip",
      image: "../img/gai/g3.jpg",
      description: "product by appel make it",
      price: 200,
      inventory: 10,
      rating: 3
    },
    quantity: 10
  }
];
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
