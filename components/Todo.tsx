import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch } from "react-redux"
import { removeTodo } from "@/feature/todo/todoSlice"

export default function Todo() {
  const todos = useSelector((state: any) => state.todos)
  console.log("todos: ", todos.length)
  const dispatch = useDispatch()

  const handleDelete = (item: any) => {
    dispatch(removeTodo(item?.id))
  }
  

  return (
    <>
      {todos.length == 0 ? (
        <Stack justifyContent={"center"} alignItems={"center"} py={3} gap={1}>
          <Typography>{"Your Todo List is Empty !"}</Typography>
          <Box
            component={"img"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYg9olMMXJDsB0KxrAVrokoqUS_SljjEazBf0Xwy_1Cbny0-2m-G0_4buviq7Q2OAj3k&usqp=CAU"
            alt="empty"
            width={"35vw !important"}
          />
          <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
            <Typography>{"-Patrick"}</Typography>
            <Box
              component={"img"}
              src="https://cdn1.iconfinder.com/data/icons/animal-kingdom-vol-2/512/starfish_sea_animal_beach-64.png"
              alt="starfish"
            />
          </Stack>
        </Stack>
      ) : (
        <>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ pt: "20px" }}>
            Todos
          </Stack>
          <Grid
            container
            xs={12}
            sm={12}
            md={12}
            xl={12}
            justifyContent={"center"}>
            <Stack pt={4} alignItems={"center"} gap={4}>
              {todos?.map((item: any, index: number) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "black",
                    width: "500px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Typography
                    sx={{
                      color: "white",
                      alignItems: "center",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}>
                    {item?.text}
                  </Typography>
                  <Box
                    onClick={() => handleDelete(item)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      pr: 2,
                    }}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Stack alignItems={"center"} py={6}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {}}>
              Clear The List
            </Button>
          </Stack>
        </>
      )}
    </>
  )
}
