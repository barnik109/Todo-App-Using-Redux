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
    SAVE_TODOS, // Imported but not used in this file
    LOAD_TODOS,
} from './allActions';

// Action creator function to add a new todo
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text },
});

// Action creator function to toggle the completion status of a todo
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
});

// Action creator function to remove a todo
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
});

// Action creator function to mark a todo as completed
export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id },
});

// Action creator function to mark a todo as incomplete
export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: { id },
});

// Action creator function to filter todos based on a filter type
export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: { filter },
});

// Action creator function to mark all todos as completed
export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
});

// Action creator function to update the search term for filtering todos
export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
});

// Action creator function to load todos from local storage
export const loadTodos = () => {
    // Load todos from local storage
    const todos = JSON.parse(localStorage.getItem('todos'));
    console.log(todos) // Log the loaded todos to the console
    return {
        type: LOAD_TODOS,
        payload: todos, // Pass the loaded todos as payload
    };
};

// Action creator function to save todos to local storage
export const saveTodos = (todos) => {
    // Save todos to local storage
    localStorage.setItem('todos', JSON.stringify(todos));
    return {
        type: SAVE_TODOS, // Indicate that todos are saved
    };
};
