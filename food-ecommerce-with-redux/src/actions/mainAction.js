import {
  DELIVERY_NUM,
  DISCOUNTED_PRODUCTS,
  DELIVERY,
  TOTAL_PRICE,
} from "./types";
import data from "../menu.json";

export const getDiscounted = () => {
  return {
    type: DISCOUNTED_PRODUCTS,
    payload: data.menus[0].items[0].items,
  };
};

export const newDelivery = (object) => {
  return {
    type: DELIVERY,
    payload: object,
  };
};

export const deliveryNum = (deliveryNum) => {
  return {
    type: DELIVERY_NUM,
    payload: deliveryNum,
  };
};

export const totalPrice = (prevPrice, newPrice) => {
  return {
    type: TOTAL_PRICE,
    payload: prevPrice + newPrice,
  };
};
