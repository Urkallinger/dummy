import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "../reducers/RootReducer";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeWithDevTools());
export default store;
