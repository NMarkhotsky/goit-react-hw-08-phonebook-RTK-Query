const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filteredContact(state, action) {
      return (state = action.payload);
    },
  },
});

export const selectFilters = state => state.filters;

export const { filteredContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
