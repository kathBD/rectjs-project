import React from 'react';
import {AppUI} from './AppUI'
import { TodoProvider } from '../Context/TodoContext';


function App () {
  
  return (

    <TodoProvider>
        <AppUI />
    </TodoProvider>
   
    
    // loading={loading}
    // error={error}
    // completedTodos={completedTodos}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    // searchedTodos={searchedTodos}
    // completeTodo={completeTodo}
    // deleteTodo={deleteTodo}
    
   
  );
}
export default App
