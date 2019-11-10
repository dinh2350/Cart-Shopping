let initialState = [
  {
    id: 1,
    name: "ip",
    image: "../img/gai/g1.jpg",
    description: "product by appel make it",
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "ip",
    image: "../img/gai/g2.jpg",
    description: "product by appel make it",
    price: 100,
    inventory: 10,
    rating: 2
  },
  {
    id: 3,
    name: "ip",
    image: "../img/gai/g3.jpg",
    description: "product by appel make it",
    price: 200,
    inventory: 10,
    rating: 3
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default products;
