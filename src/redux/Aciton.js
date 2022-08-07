import { ADD_ITEM, REMOVE_ITEM, PRODUCT_DETAIL } from "./Constant";

export function product_detail(singal) {
  return {
    type: PRODUCT_DETAIL,
    payload: singal,
  };
}

// export function add(info) {
//   return {
//     type: ADD_ITEM,
//     payload: {
//       cart: info.cart,
//       item: info.item,
//       price: info.price,
//       id: info.id,
//     },
//   };
// }
