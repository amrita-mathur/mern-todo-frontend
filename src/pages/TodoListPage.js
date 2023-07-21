import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "../components/Todo";
import '../App.css';
import { useContext } from "react";
import {TaskContext} from '../App';


const TodoListPage = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const { url } = useContext(TaskContext);

  useEffect(() => {
   
    axios
      .get(url)
      .then((res) => setTodoList(res.data))
      .catch((err) => {
        setError(err.message);
      });
      
  }, []);

  return (
    <div class="container" style={{margin: 'auto', marginTop: '2rem'}}>


        {Array.from(todoList).map((todo) => (
          
          <Todo item={todo} key={todo._id}/>
        
          ))}
        
 
          </div>
  );
};

export default TodoListPage;
