import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slices/CartSlice'
import Categoryslice from './slices/CategorySlice'
import Searchslice from './slices/SearchSlice'

const Store=configureStore({
    reducer:{
        cart:CartSlice,
        category:Categoryslice,
        search:Searchslice,

    },
});

export default Store;