const initalState = {
  products: [],
};

export const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ToDo":
      return {
        ...state,
        products: [...state.products, action.paylaod],
      };

    //////////

    //////////

    default:
      return state;
  }
};
