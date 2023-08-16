import { TodoProvider } from "./context/TodoProvider"
import { TodoList } from './components/TodoList';
import { TodoTitle } from "./components/TodoTitle";

export const Todo = () => {
    

    return (
        <TodoProvider>
            <TodoTitle />
            <TodoList />
        </TodoProvider>
    )
}
