import { combineReducers } from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  cartReducer,
});

export default rootReducer;
