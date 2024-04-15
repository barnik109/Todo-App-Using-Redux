// Import the createStore function from the Redux library
import { createStore } from "redux";
// Import the todoReducer from the reducers file
import todoReducer from "./reducers";

// Create the Redux store by passing the todoReducer to createStore
const store = createStore(todoReducer);

// Export the created store as the default export
export default store;
