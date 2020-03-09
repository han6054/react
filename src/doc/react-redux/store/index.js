import {createStore} from "../../13.redux";
import reducer from "./reducer";
let store = createStore(reducer);

export default store