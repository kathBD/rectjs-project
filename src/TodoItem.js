import './TodoItem.css';
import { BsCheckCircleFill } from "react-icons/bs";
import { FaDeleteLeft } from "react-icons/fa6";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
   
      <BsCheckCircleFill />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
      <FaDeleteLeft />
      </span>
    </li>
  );
}

export { TodoItem };