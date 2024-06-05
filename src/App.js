import React from 'react'
import { TodoCounter } from './TodoCounter'
import './TodoCounter.css';
import { TodoSearch } from './TodoSearch'
import './TodoSearch.css';
import { TodoList } from './TodoList'
import './TodoList.css';
import { TodoItem } from './TodoItem'
import './TodoItem.css'
import { CreateTodoButton } from './CreateTodoButton'
// import { Header } from './Header';
// import './Header.css'
import './CreateTodoButton.css'


const defaulTodos = [
  { text: 'Terminar ruta Js', confirm: true },
  { text: 'Angular ruta', confirm: false },
  { text: 'Verificar certificado', confirm: false },
  { text: 'presentar examen JS', confirm: false }
]
function App () {
  return (
    <>

      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaulTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        ;
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
