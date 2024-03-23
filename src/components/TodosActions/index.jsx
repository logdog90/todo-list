import { RiDeleteBack2Line, RiRefreshLine } from 'react-icons/ri'

import Button from '../UI/Button'
import './styles.css'

const TodosActions = ({ resetTodos, deleteCompletedTodos, completedTodosExist }) => {
    return (
        <section className="todos-actions">
            <Button 
                title="Сбросить все задачи"
                onClick={resetTodos}
            >
                <RiRefreshLine />
            </Button>

            <Button 
                title="Сбросить завершенные задачи"
                disabled={!completedTodosExist}
                onClick={deleteCompletedTodos}
            >
                <RiDeleteBack2Line />
            </Button>
        </section>
    )
}

export default TodosActions