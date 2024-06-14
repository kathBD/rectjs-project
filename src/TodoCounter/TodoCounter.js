import React from 'react'
import './TodoCounter.css'
import pac from './juego.png'
import { TodoContext } from '../Context/TodoContext'

function TodoCounter () {
  const {
    completedTodos,
    totalTodos,
  } =    React.useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>
      <img className='terminado' src={pac} alt='completado' />
      <span>
        Has completado {''}  
        {completedTodos}
       
      </span>{' '}
      de <span>{totalTodos}</span> TODOs
    </h1>
  )
}

export { TodoCounter }
