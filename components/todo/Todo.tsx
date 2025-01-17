import { todoProps } from '@/types'
import React from 'react'
import ChangeTodo from './ChangeTodo'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

const Todo = ({todo}: {todo: todoProps}) => {
    const todoStyle = {
        textDecoration: todo.isCompleted === true ? 'line-through' : 'none',
        opacity: todo.isCompleted === true ? 0.5 : 1
    }
  return (
    <div style={todoStyle} className='w-10/12 mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl'>
        {/* ChangeTodo  */}
        <ChangeTodo todo={todo}/>
        <span className='text-center font-bold uppercase grow text-white'>{todo.title}</span>
        <div className='flex items-center mx-2'>
            {/* EditTodo */}
            <EditTodo todo={todo}/>
        </div>

       <div className='flex items-center'>
        <DeleteTodo todo={todo}/>
       </div>
    </div>
  )
}

export default Todo