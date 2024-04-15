import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, markCompleted, markIncomplete } from '../redux/actions'; // Importing action creators
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa'; // Importing icons
import { FiEdit } from 'react-icons/fi';

// Component for rendering individual todo items
const TodoItem = ({ todo, index }) => {
    const dispatch = useDispatch(); // useDispatch hook to dispatch actions

    return (
        // Container for todo item with styling classes
        <div className="bg-blue-200 rounded-lg p-4 mb-4 flex justify-between items-center shadow-md">
            <div className="flex items-center">
                {/* Displaying todo index */}
                <span className="mr-4 text-gray-700">
                    {index + 1}.
                </span>
                {/* Displaying todo text with optional line-through if completed */}
                <span className={`mr-4 ${todo.completed ? 'line-through text-gray-700' : ''}`}>
                    {todo.text}
                </span>
            </div>
            {/* Container for action buttons */}
            <div className='space-x-3'>
                {/* Button to toggle todo completion status */}
                <button
                    className="text-sm bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => dispatch(toggleTodo(index))}
                >
                    {/* Displaying toggle icon based on todo completion status */}
                    {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
                </button>
                {/* Button to remove todo */}
                <button
                    className="text-sm bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => dispatch(removeTodo(index))}
                >
                    {/* Displaying trash icon */}
                    <FaTrash />
                </button>
                {/* Button to mark todo as completed */}
                {!todo.completed && (
                    <button
                        className="text-sm bg-green-500 text-white px-2 py-1 rounded"
                        onClick={() => dispatch(markCompleted(index))}
                    >
                        {/* Displaying check icon */}
                        <FaCheck />
                    </button>
                )}
                {/* Button to mark todo as incomplete */}
                {todo.completed && (
                    <button
                        className="text-sm bg-yellow-500 text-white px-2 py-1 rounded"
                        onClick={() => dispatch(markIncomplete(index))}
                    >
                        {/* Displaying times icon */}
                        <FaTimes />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
