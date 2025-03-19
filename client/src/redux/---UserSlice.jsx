import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'setRole',
  initialState: {
    value: "user",
  },
  reducers: {
    user_fit: (state) => {
      state.value = "user"
    },
    admin: (state) => {
      state.value = "admin"
    }
  },
})


export const { user_fit, admin } = UserSlice.actions

export default UserSlice.reducer