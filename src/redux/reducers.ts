import { combineReducers } from "redux";
import theme from "@redux/slices/theme";
import swap from "@redux/slices/swap";

const rootReducer = combineReducers({ theme, swap });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
