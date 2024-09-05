import indexReducer from "./indexReducer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        index: indexReducer,
    }
})

export default store;