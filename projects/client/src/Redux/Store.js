import { configureStore } from "@reduxjs/toolkit"

import SearchCollection from "./SearchCollection"
import LoginAdmin from "./LoginAdmin"


export default configureStore({
    reducer: {
        SearchCollection,
        LoginAdmin
    }
})