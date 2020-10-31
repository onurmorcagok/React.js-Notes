import { combineReducers } from "redux";
import changeCategoryReducer from "../reducers/changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from './productListReducer'

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
});

export default rootReducer;
