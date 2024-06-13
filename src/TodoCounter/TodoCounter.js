import React from 'react'
import './TodoCounter.css'
import pac from './juego.png'

function TodoCounter ({ completed, total }) {
  return (
    <h1 className='TodoCounter'>
      <span>
        Has completado <img className='terminado' src={pac} alt='completado' />
        {completed}
      </span>{' '}
      de <span>{total}</span> TODOs
    </h1>
  )
}

export { TodoCounter }
