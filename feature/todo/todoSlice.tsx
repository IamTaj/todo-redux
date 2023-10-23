import { createSlice, nanoid } from "@reduxjs/toolkit"

interface RootState {
  todos: any[] // Replace 'any[]' with the actual type of your todos array
}

const initialState: any = {
  todos: [],
}
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: any) => {
      const todo = {
        id: nanoid(),
        text: action?.payload,
      }
      state?.todos.push(todo)
    },
    removeTodo: (state, action: any) => {
      state.todos = state?.todos?.filter(
        (todo: any) => todo?.id !== action?.payload
      )
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload
      const todoToEdit = state?.todos.find((todo:any) => todo.id === id)
      if (todoToEdit) {
        todoToEdit.text = newText
      }
    },
  },
})


export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice?.reducer