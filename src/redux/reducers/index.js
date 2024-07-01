import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import CategoryListReducer from "./categoryListReducer";


const rootReducer = combineReducers({
    changeCategoryReducer,
    CategoryListReducer
})

export default rootReducer;