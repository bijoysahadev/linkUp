import { configureStore } from '@reduxjs/toolkit'
import  userinfoslice  from './slices/userinfoslice'

export default configureStore({
  reducer: {
    activeuser : userinfoslice
  },
})