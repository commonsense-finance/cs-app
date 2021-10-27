import { combineReducers } from "redux";

//import counter from "@redux/slices/counter";

import theme from "@redux/slices/theme";
import web3 from "@redux/slices/web3";
import tokens from "@redux/slices/tokens";
import swap from "@redux/slices/swap";

const rootReducer = combineReducers({ theme, web3, tokens, swap });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
