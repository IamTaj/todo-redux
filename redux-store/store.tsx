import todoSlice from "@/feature/todo/todoSlice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, todoSlice)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)