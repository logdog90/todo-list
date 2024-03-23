import './styles.css'

import Todo from '../Todo'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <section className="todos">
            {!todos.length && <h2>В списке нет ни одной задачи!</h2>}
            {<ul>{todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}</ul>}
        </section>
    )
}

export default TodoList