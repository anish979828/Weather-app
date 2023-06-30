import { createStore } from "redux";
import rootReducer from "../reducer/weatherReducer";

const store = createStore(rootReducer);

export default store;