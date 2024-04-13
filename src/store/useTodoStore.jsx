import { create } from "zustand";

export const useTodoStore = create(set => ({
  todos: ["Finish this excersise", "start project", "eat chicken"],
  addTodo: task => {
    set(state => ({ todos: [...state.todos, task] }));
  },
  deleteTodo: index => {
    set(state => {
      const newTodos = [...state.todos];
      newTodos.splice(index, 1);
      return { todos: newTodos };
    });
  },
  completeTodo: () => {
    set();
  },
}));
