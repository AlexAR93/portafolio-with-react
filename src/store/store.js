import { configureStore } from '@reduxjs/toolkit'
import { myDataSlice } from './slices/mydata'


export const store = configureStore({
  reducer: {
    myData: myDataSlice.reducer
  },
})