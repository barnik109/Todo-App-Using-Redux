import { useSelector } from "react-redux";
import TodoItem from "./TaskItem";

// Functional component to render the list of todos
const TodoList = () => {
    // Accessing the Redux store state using useSelector hook
    const filteredTodos = useSelector((state) => {
        // Extracting todos, filter, and searchTerm from the state
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm.toLowerCase();

        // Filtering todos based on the current filter and search term
        return todos.filter((todo) => {
            const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
                (filter === 'INCOMPLETE' && !todo.completed) ||
                filter === 'ALL';

            const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchesFilter && matchesSearch;
        });
    });

    // Rendering the list of todos
    return (
        <ul>
            {/* Placeholder message for empty todo list */}
            <li className="my-2 text-sm italic">All Your Notes Here...</li>
            {/* Mapping through filteredTodos and rendering TodoItem component for each todo */}
            {filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </ul>
    );
};

export default TodoList;
