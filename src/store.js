import  {createStore} from "redux";
import reducer from "../src/components/reducers/reducer";

export const store = createStore(reducer);
