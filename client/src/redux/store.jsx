import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './DarkSlice'
import userReducer from './UserSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    setRole: userReducer
  },
})