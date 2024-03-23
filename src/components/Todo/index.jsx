import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri"
import { FaCheck } from "react-icons/fa";

import "./styles.css";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={!todo.isCompleted ? "todo": "todo completed-todo"}>
      <RiTodoFill className="todo-icon" />
      <span className="todo-text">{todo.text}</span>
      <RiDeleteBin2Line 
        className="delete-icon" 
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className="check-icon" onClick={() => toggleTodo(todo.id)} />
    </li>
  );
};

export default Todo;
