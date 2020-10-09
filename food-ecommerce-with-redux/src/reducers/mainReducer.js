import {
  DISCOUNTED_PRODUCTS,
  DELIVERY_NUM,
  DELIVERY,
  TOTAL_PRICE,
} from "../actions/types";

const initialState = {
  discounted: [],
  delivery: [],
  deliveryNum: 0,
  totalPrice: 0,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOUNTED_PRODUCTS:
      return {
        ...state,
        discounted: action.payload,
      };
    case DELIVERY:
      return {
        ...state,
        delivery: [action.payload, ...state.delivery],
      };
    case DELIVERY_NUM:
      return {
        ...state,
        deliveryNum: action.payload,
      };
    case TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
