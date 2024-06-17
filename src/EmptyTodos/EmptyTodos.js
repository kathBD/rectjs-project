import React from 'react';
import { MdFormatListBulletedAdd } from "react-icons/md";
import './EmptyTodos.css';
import Card from 'react-bootstrap/Card';
import pacman from './pacman.webp'
import ghost from './ghost.png'

function EmptyTodos() {
  return (
  
     <div className="msg-container" >
      <Card >
        <Card.Img  style={{ width: '40px' }} variant="top" src={ghost}/>
        <Card.Body>
          <Card.Title >Hola, empecemos a crear</Card.Title>
          <Card.Text>
            Agreguemos Tareas
          </Card.Text>
        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
 </div>
  );
}

export { EmptyTodos };