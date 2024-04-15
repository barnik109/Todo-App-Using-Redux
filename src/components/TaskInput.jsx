// Importing necessary modules and components
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TaskList'; // Importing the TodoList component
import FilterButtons from './FilterButton'; // Importing the FilterButtons component
import { BsSearch, BsPlus } from 'react-icons/bs'; // Importing icons
import { addTodo, loadTodos, saveTodos, updateSearchTerm } from '../redux/actions'; // Importing action creators

// Functional component for the Todo application
const Todo = () => {
  // Accessing todos and filter state from the Redux store
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch(); // useDispatch hook to dispatch actions
  const [newTodoText, setNewTodoText] = useState(''); // State for new todo text input
  const [searchTerm, setSearchTerm] = useState(''); // State for search term input

  // Function to handle adding a new todo
  const handleAddTodo = (text) => {
    dispatch(addTodo(text)); // Dispatching addTodo action
  };

  // Function to handle clicking on the add todo button
  const handleAddTodoClick = () => {
    // Check if the new todo text is not empty
    if (newTodoText.trim() !== '') {
      // Add new todo and reset input field
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  // Function to handle changes in the search term input
  const handleSearchChange = (value) => {
    setSearchTerm(value); // Update search term state
    dispatch(updateSearchTerm(value)); // Dispatch action to update search term in store
  };

  // Effect hook to load todos from local storage on component mount
  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  // Effect hook to save todos to local storage whenever todos change
  useEffect(() => {
    dispatch(saveTodos(todos));
  }, [todos]);

  // Rendering the Todo application UI
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white rounded-lg shadow-md">
        {/* Application title */}
        <h2 className='mt-3 mb-6 text-3xl font-bold text-center uppercase'>Personal TODO APP</h2>
        {/* Input field and button for adding new todos */}
        <div className="flex items-center mb-4">
          <input
            id="addTodoInput"
            className="flex-grow p-3 border border-gray-300 focus:outline-none rounded"
            type="text"
            placeholder="Add Todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button
            className="ml-4 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleAddTodoClick}
          >
            <BsPlus size={24} />
          </button>
        </div>

        {/* Filter buttons and search input */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <FilterButtons /> {/* Rendering the FilterButtons component */}
          <div className="flex items-center mb-4">
            <input
              className="flex-grow p-3 border border-gray-300 focus:outline-none rounded"
              type="text"
              placeholder="Search Todos"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button className="ml-4 p-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              <BsSearch size={24} />
            </button>
          </div>
        </div>

        {/* Rendering the TodoList component */}
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
