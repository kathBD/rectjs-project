import React from 'react'
import { TodoContext } from '../Context/TodoContext'
import './TodoForm.css'
function TodoForm() {
    const {
      addTodo,
      setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
  
    const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
    };
  
    const onCancel = () => {
      setOpenModal(false);
    };
  
    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    };
  return (
    <div className='container-form'>
     <form onSubmit={onSubmit}>
      <label>Esribe tu nuevo TODO</label>
      <textarea
        placeholder="Completar ruta developer"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>
    </form>
      
    </div>
  )
}
export { TodoForm }
