import { useState } from "react";

import Button from "../UI/Button";
import "./styles.css";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <section className="form-section">
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Добавьте задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button 
          type="submit"
          title="Добавить"
        >
          Добавить
        </Button>
      </form>
    </section>
  );
};

export default TodoForm;
