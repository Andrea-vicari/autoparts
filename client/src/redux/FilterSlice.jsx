import { createSlice } from '@reduxjs/toolkit'

export const FilterSlice = createSlice({
  name: 'filtroSelezionato',
  initialState: {
    value: "no",
  },
  reducers: {
    filtraSi: (state) => {
      state.value = "si"
    },
    filtraNo: (state) => {
      state.value = "no"
    }
  },
})


export const { filtraSi, filtraNo } = FilterSlice.actions

export default FilterSlice.reducer