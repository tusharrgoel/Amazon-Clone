export const initialState = {
  basket: [
    {
      id: "PR-100",
      title:
        "The only Shark who made the shrak tank india a worth of Rs 500 crore-Ashneer Grover",
      price: 199.0,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/61EGLdlx8kL._SX309_BO1,204,203,200_.jpg",
    },
  ],
  user: null,
};

export  const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount,0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        // eslint-disable-next-line no-template-curly-in-string
        console.warn("Cant remove product (id : ${action.id}");
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
