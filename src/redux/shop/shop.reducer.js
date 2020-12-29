import { act } from "react-dom/test-utils";
import data from "../../components/directory/data";

import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

function shopReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;
