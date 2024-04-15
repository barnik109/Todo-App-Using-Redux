// Import necessary modules
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import TaskInput from './components/TaskInput'

// Define the main component of the application
function App() {
  // Render the main component
  return (
    // Provide the Redux store to the entire application
    <Provider store={store}>
      {/* Render the TaskInput component */}
      <TaskInput />
    </Provider>
  )
}

// Export the main component as the default export
export default App
