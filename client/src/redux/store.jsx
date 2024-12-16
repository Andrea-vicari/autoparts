import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './DarkSlice'
import userReducer from './UserSlice'
import filterReducer from './FilterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    setRole: userReducer,
    setFilter:filterReducer
  },
})