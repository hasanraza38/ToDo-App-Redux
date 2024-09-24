import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "Todos",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    removeTodo: (state, action) => {
      state.todo.splice(action.payload.index, 1);
    },
    editTodo: (state, action) => {
      const editedValue = prompt("Please Enter A New Todo :");
      state.todo.splice(action.payload.index, 1, {
        title: editedValue,
        id: state.todo[action.payload.index].id,
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
