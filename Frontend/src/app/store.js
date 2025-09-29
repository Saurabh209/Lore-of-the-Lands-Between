import {configureStore} from "@reduxjs/toolkit";
import knowledgeSlice  from "../features/knowledgeSlice";

export const store = configureStore({
    reducer:{
        app:knowledgeSlice
    }
})