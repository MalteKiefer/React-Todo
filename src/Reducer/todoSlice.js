import { createSlice } from "@reduxjs/toolkit";
import { v4 as uudi } from "uuid";

const initialState = {
  list: [{ id: uudi(), title: "Test", done: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
