import { createSlice } from '@reduxjs/toolkit'

export const DarkSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "ligth",
  },
  reducers: {
    dark: (state) => {
      state.value = "dark"
    },
    ligth: (state) => {
      state.value = "ligth"
    }
  },
})


export const { dark, ligth } = DarkSlice.actions

export default DarkSlice.reducer