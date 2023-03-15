import { configureStore, createSlice } from "@reduxjs/toolkit";
//리덕스 스테이트 사용법
let user = createSlice({
  name: "user",
  initialState: {id : ''},
  reducers: {
    setUser(state,id) {
        state.id = id.payload
    },
   
  },
});

export let{setUser} = user.actions

export default configureStore({
    reducer: {
      user: user.reducer,
      
    },
  });

