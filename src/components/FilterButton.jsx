// Importing necessary modules and action creators
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';

// Component for rendering filter buttons and mark all completed button
const FilterButtons = () => {
    const dispatch = useDispatch(); // useDispatch hook to dispatch actions
    const currentFilter = useSelector((state) => state.filter); // Accessing current filter state from the Redux store

    // Function to handle filter change
    const handleFilter = (filter) => {
        dispatch(filterTodos(filter)); // Dispatching filterTodos action with the selected filter
    };

    // Rendering filter buttons and mark all completed button
    return (
        <div className="flex space-x-4 items-center">
            {/* Dropdown menu for selecting filter */}
            <select
                className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
                value={currentFilter}
                onChange={(e) => handleFilter(e.target.value)}
            >
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            {/* Button to mark all todos as completed */}
            <button
                className="text-sm px-2 py-1 bg-purple-500 text-white rounded ml-2"
                onClick={() => dispatch(markAllCompleted())}
            >
                Mark All Completed
            </button>
        </div>
    );
};

export default FilterButtons;
