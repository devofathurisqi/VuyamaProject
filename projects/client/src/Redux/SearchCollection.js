import { createSlice } from "@reduxjs/toolkit"

const SearchCollection = createSlice({
    name: 'DeleteProperty',
    initialState: {
      query : "",
      page : 0,
      categoryIsRun : false
    },
    reducers: {
      setQuery : (state, action) => {
        state.query = action.payload
      },
      setPageRedux : (state, action) => {
        state.page = action.payload
      },
      setCategoryFromRedux : (state, action) => {
        state.categoryIsRun = action.payload
      },
    }
  })
  
  export const { setQuery, setPageRedux, setCategoryFromRedux } = SearchCollection.actions
  export default SearchCollection.reducer