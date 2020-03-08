import {createStore} from "../index";
import reducer from "./reducer";
let store = createStore(reducer,0);

export default store