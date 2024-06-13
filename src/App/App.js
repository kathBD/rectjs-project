import React from 'react';
import {useLocalStorage} from './useLocalStore';
import {AppUI} from './AppUI'

// const defaultTodos = [
//   { text: 'Terminar curso Java', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'presentar examen', completed: false },
//   { text: 'Ir Gym', completed: false },
//   { text: 'Usar estados derivados', completed: true }
// ]

// localStorage.setItem('todos', JSON.stringify(defaultTodos))



function App () {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

 
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
    
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    
    />
  )
}
export default App
