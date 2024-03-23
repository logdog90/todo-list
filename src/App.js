import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodosActions from "./components/TodosActions";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <>
        <h1>Список задач</h1>
        <TodoForm addTodo={addTodoHandler} />
        {!!todos.length > 0 && (
          <TodosActions
            completedTodosExist={!!completedTodosCount}
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
          />
        )}
        <TodoList
          todos={todos}
          toggleTodo={toggleTodoHandler}
          deleteTodo={deleteTodoHandler}
        />
        {completedTodosCount > 0 && <h2>Завершённые задачи: {completedTodosCount}</h2>}
      </>
    </div>
  );
};

export default App;
