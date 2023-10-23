import { Inter } from 'next/font/google'
import Todo from '@/components/Todo'
import AddTodo from '@/components/addTodo'

const inter = Inter({ subsets: ['latin'] })

export default function TodoList() {
  return (
   <>
   <AddTodo/>
   <Todo/>
   </>
  )
}
