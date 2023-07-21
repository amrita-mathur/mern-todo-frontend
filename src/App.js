import TodoListPage from './pages/TodoListPage';
import AddNewTodo from './components/AddNewTodo';
import { useState } from 'react';
import EditTask from './components/EditTask';
import { createContext } from 'react';

export const TaskContext = createContext(null);
function App() {
  
  const [editFlag, setEditFlag] = useState(false);
  const [id, setId] = useState("");
  const url = "https://todolistapp-yo5k.onrender.com/todos";
  return (
    <TaskContext.Provider value={{ id, setEditFlag, setId, url}}>
    <div className="App">
      {editFlag && <EditTask/>} 
      {!editFlag && <AddNewTodo />}
      <TodoListPage/>
    </div>
    </TaskContext.Provider>
  );
}


export default App;
