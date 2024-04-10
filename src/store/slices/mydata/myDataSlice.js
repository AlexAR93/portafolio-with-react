import { createSlice } from '@reduxjs/toolkit';

const initialState={
    data:[],
    isLoading:false,
}

export const myDataSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: { 
        startLoading:(state)=>{
            state.isLoading=true;
        },
        setData:(state,action)=>{
            state.isLoading=false;
            state.data=action?.payload;
        }
     },
});

export const {setData,startLoading} = myDataSlice.actions;