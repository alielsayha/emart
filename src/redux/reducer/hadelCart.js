import { createStore } from "redux";

const cart = [];

const redux = (state = cart, action) => {
  const product = action.payload;

  if (action.type == "addCart") {
    const exist = state.find((x) => x.id == product.id);
    if (exist) {
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      );
    } else {
      return [
        ...state,
        {
          ...product,
          qty: 1,
        },
      ];
    }
  }

  if (action.type === "deleteCart") {
    const exist = state.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      return state.filter((x) => x.id != product.id);
    } else {
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      );
    }
  }

  return state;
};

const store = createStore(redux);
export default store;









// if (action.type === "addCart") {
//   const exist = state.find((x) => x.id === product.id);
//   if (exist) {
//     return state.map((x) => {
//       return x.id === product.id ? { ...x, qty: x.qty + 1 } : x;
//     });
//   } else {
//     return [
//       ...state,
//       {
//         ...product,
//         qty: 1,
//       },
//     ];
//   }
// }

// if (action.type === "deleteCart") {
//   const exist = state.find((x) => x.id == product.id);
//   if (exist.qty === 1) {
//     return state.filter((x) => x.id != product.id);
//   } else {
//     return state.map((x) => {
//       return x.id === product.id ? { ...x, qty: x.qty - 1 } : x;
//     });
//   }
// }
