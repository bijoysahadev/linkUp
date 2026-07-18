import { createSlice } from '@reduxjs/toolkit'

export const userinfoslice = createSlice({
  name: 'user',
  initialState: {
    value: [],
  },
  reducers: {
    activeuser: (state,action) => {
        state.value=action.payload

     
    },
  
  },
})


export const { activeuser} = userinfoslice.actions

export default userinfoslice.reducer