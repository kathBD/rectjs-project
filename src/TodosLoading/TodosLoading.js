import React from 'react'
import './TodosLoading.css'

function TodosLoading () {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon'></span>
      <p className='LoadingTodo-text'></p>
      <div className='.container_loading'>
      <div className='loader'>
        <div className='circle'></div>
        <div className='circle'></div>
        <div className='circle'></div>
       </div>
      </div>

      <span className='LoadingTodo-deleteIcon'></span>
    </div>
  )
}

export { TodosLoading }
