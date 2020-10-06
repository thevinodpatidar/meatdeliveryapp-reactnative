import { combineReducers } from "redux";

import auth from "../Auth/reducers";
import token from "./tokenReducer";

export default combineReducers({
    auth,
    token
})