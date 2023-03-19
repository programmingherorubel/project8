import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: "all",
        search: "",
    },
    reducers: {
        applyFilter: (state, action) => {
            state.filter = action.payload;
        },
        applySearch: (state, action) => {
            state.search = action.payload;
        }
    }
})

export default filterSlice.reducer;
export const { applyFilter, applySearch } = filterSlice.actions;