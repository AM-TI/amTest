import { createStore } from "redux";
import reducer from "../Redux/index";

const store = createStore(reducer);

store.subscribe(() => console.log(store));

export default store;
