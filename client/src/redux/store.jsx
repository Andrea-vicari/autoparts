import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './DarkSlice'



export default configureStore({
  reducer: {
    counter: counterReducer
  },
})