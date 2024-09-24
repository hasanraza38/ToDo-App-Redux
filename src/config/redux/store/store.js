import { configureStore} from "@reduxjs/toolkit";
import todoslice from "../reducers/todoslice";


export const store = configureStore({
    reducer:{
        todos: todoslice
    }
})