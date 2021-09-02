
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";


const middlewares = [];
// show logger messages in console only in development mode
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

// applyMiddleware takes an infinite number of middlewares (we can use other than logger)
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export default store;
const final_object = {store};
export default final_object; // so that we have access to both