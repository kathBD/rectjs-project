import React from 'react'
import './TodoSearch.css'


// eslint-disable-next-line react-hooks/rules-of-hooks




 function TodoSearch({searchValue,
  setSearchValue}) 
  
 
{
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