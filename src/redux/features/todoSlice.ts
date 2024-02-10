import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    // toggleComplete: (state, action: PayloadAction<string>) => {
    //   const task = state.todos.find((item) => item.id === action.payload);
    //   task!.isCompleted = !task?.isCompleted;
    // },
    // toggleComplete: (state, action: PayloadAction<string>) => {
    //   const index = state.todos.findIndex((todo) => todo.id === action.payload);
    //   if (index !== -1) {
    //     const todo = state.todos[index];
    //     state.todos.splice(index, 1); // Remove todo from current position
    //     // Add todo back at the bottom if it's completed
    //     if (todo.isCompleted) {
    //       state.todos.push(todo);
    //     } else {
    //       // Add todo back at the top if it's not completed
    //       state.todos.unshift(todo);
    //     }
    //     // Toggle the isCompleted property
    //     todo.isCompleted = !todo.isCompleted;
    //   }
    // },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const { todos } = state;
      const index = todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        const completedTodo = todos[index];
        // Toggle the isCompleted property
        completedTodo.isCompleted = !completedTodo.isCompleted;
        // Remove the completed todo from its current position
        state.todos = todos.filter((todo) => todo.id !== action.payload);
        // Append the completed todo at the end of the list
        state.todos.push(completedTodo);
      }
    },
  },
});
export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
