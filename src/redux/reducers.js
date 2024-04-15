// Importing action types from the allActions file
import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
    LOAD_TODOS,
} from './allActions';

// Initial state of the todoReducer
const initialState = { todos: [], filter: 'ALL', searchTerm: '' };

// Reducer function to manage state changes for todos
const todoReducer = (state = initialState, action) => {
    // Switch statement to handle different action types
    switch (action.type) {
        case ADD_TODO:
            // Adding a new todo to the todos array
            return {
                ...state,
                todos: [...state.todos, { text: action.payload.text, completed: false }],
            };

        case TOGGLE_TODO:
            // Toggling the completed status of a todo
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case REMOVE_TODO:
            // Removing a todo from the todos array
            return {
                todos: state.todos.filter((todo, index) => index !== action.payload.id),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case MARK_COMPLETED:
            // Marking a todo as completed
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: true } : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case MARK_INCOMPLETE:
            // Marking a todo as incomplete
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id ? { ...todo, completed: false } : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case FILTER_TODOS:
            // Filtering todos based on a filter type
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm,
            };

        case UPDATE_SEARCH_TERM:
            // Updating the search term for filtering todos
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm,
            };

        case MARK_ALL_COMPLETED:
            // Marking all todos as completed
            return {
                todos: state.todos.map((todo) => ({ ...todo, completed: true })),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };

        case LOAD_TODOS:
            // Loading todos from local storage
            const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
            return {
                ...state,
                todos: savedTodos,
            };

        default:
            // Return the current state if no action type matches
            return state;
    }
};

// Exporting the todoReducer as the default export
export default todoReducer;
