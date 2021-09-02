
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cardsReducer from "./cards/cards.reducer";


const rootReducer = combineReducers({
    user: userReducer,
    cards: cardsReducer
});

export default rootReducer;