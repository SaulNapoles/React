import { useTodos } from "../hooks"
import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"

export const TodoApp = () => {    

    const { todos, todosCount, pendingTodosCount ,handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();
  
    return (
        <>
            <h1>TodoApp {todos.length}, <small>pendientes: { todos.filter(todo => !todo.done).length }</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo={ handleNewTodo } />
                </div>
            </div>
        </>
    )
}
