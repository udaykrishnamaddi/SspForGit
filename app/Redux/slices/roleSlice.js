// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const roleSlice = createSlice({
  name: 'Role',
  initialState: {
    role: '',
  },
  reducers: {
    roleAssign:(state,action)=>{
        console.log(action.payload,"ochidni");
        state.role=action.payload;
    }
  },
});

export const { roleAssign} = roleSlice.actions;
export default roleSlice.reducer;
