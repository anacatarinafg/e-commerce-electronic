const Storage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems.length > 0 ? cartItems : []))
}

export const CartReducer = (state, action) => {
  let index = -1;

  if (action.payload) {
    index = state.cartItems.findIndex((item) => item.id === action.payload.id);
  }

  let newItems = [...state.cartItems];

  switch (action.type) {
    case 'ADD':
    case 'INCREASEQTY':
      if (index === -1) {
        newItems.push({ ...action.payload, quantity: 1 });
      } else {
        newItems[index] = { ...newItems[index], quantity: newItems[index].quantity + 1 };
      }
      break;
    case 'REMOVE':
      if (index > -1) {
        newItems = newItems.filter((item) => item.id !== action.payload.id);
      }
      break;
    case 'DECREASEQTY':
      if (index > -1) {
        if (newItems[index].quantity > 1) {
          newItems[index] = { ...newItems[index], quantity: newItems[index].quantity - 1 };
        }
      }
      break;
    case 'CLEAR':
      newItems = [];
      break;
    default:
  }

  Storage(newItems)
  return { ...state, cartItems: newItems };
};