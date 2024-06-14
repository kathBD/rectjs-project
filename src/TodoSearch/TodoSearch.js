import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../Context/TodoContext'


// eslint-disable-next-line react-hooks/rules-of-hooks




 function TodoSearch() 
  {
  const {
    searchValue,
    setSearchValue,
    
  } =    React.useContext(TodoContext)
  return (
  
  <div className='container'>
      
    <input placeholder='Curso de JSON'  
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value);
        
      }}
     
    />
   
    </div>
  )
}


export  {TodoSearch};