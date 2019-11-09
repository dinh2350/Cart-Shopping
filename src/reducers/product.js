let initialState = [
  {
    id: 1,
    name: "ip",
    image: "lay tren mang",
    description: "product by appel make it",
    price: 500,
    inventory: 10
  },
  {
    id: 2,
    name: "ip",
    image: "lay tren mang",
    description: "product by appel make it",
    price: 500,
    inventory: 10
  },
  {
    id: 3,
    name: "ip",
    image: "lay tren mang",
    description: "product by appel make it",
    price: 500,
    inventory: 10
  }
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default product;
