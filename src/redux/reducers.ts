import { combineReducers } from "redux";

import theme from "@redux/slices/theme";
import web3 from "@redux/slices/web3";
import tokens from "@redux/slices/tokens";
import swap from "@redux/slices/swap";
import account from "@redux/slices/account";
import contracts from "@redux/slices/contracts";

const rootReducer = combineReducers({ theme, account, web3, contracts, tokens, swap });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
