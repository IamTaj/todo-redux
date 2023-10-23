import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "@/feature/todo/todoSlice"
import { Button, Stack, TextField } from "@mui/material"

function AddTodo() {
  const dispatch = useDispatch()
  const [input, setInput] = useState<any>()
  console.log('input: ', input);

  const addTodoHandler = () => {
    dispatch(addTodo(input))
    setInput("")
  }

  const handleSubmit = () => {
    console.log("form submit")
    addTodoHandler()
  }
  return (
    <>
    <Stack flexDirection={"row"} justifyContent={"center"} pt={"20px"} gap={4}>
      <TextField
        id="standard-basic"
        label="Todo"
        variant="outlined"
        value={input}
        onChange={(event: any) => setInput(event?.target?.value)}
      />
      <Button variant="contained" sx={{backgroundColor:"grey !important"}} onClick={handleSubmit}>Add Todo</Button>
    </Stack>
    </>
  )
}

export default AddTodo
