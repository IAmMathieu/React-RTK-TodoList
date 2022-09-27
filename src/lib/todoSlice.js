import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire la vaisselle", done: false },
    { id: 2, text: "Faire la lessive", done: false },
    { id: 3, text: "Faire les courses", done: true },
    { id: 4, text: "Ranger le bureau", done: false },
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now,
        done: false,
        text: action.payload,
      };

      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      state = state.filter((t) => t.id !== action.payload);
      return state
    },
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
