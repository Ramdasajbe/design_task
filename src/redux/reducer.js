import { ADD_ITEM, REMOVE_ITEM, PRODUCT_DETAIL } from "./Constant";

const counterReducer = (state = [], { type, payload }) => {
  switch (type) {
    case PRODUCT_DETAIL:
      return [...state, payload];

    default:
      return state;
  }
};

export default counterReducer;

// case ADD_ITEM:
//   return {
//     ...state.user,
//     cart: state.cart + payload.cart,
//     item: payload.item,
//     price: payload.price,
//     id: payload.id,
//   };

// return state - payload;
