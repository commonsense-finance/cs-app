import { combineReducers } from "redux";
import theme from "@redux/slices/theme";
import swap from "@redux/slices/swap";
import contact from "@redux/slices/contact";

const rootReducer = combineReducers({ theme, swap, contact });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
