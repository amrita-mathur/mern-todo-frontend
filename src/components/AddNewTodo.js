import React, { useState } from 'react'
import axios from 'axios';

const AddNewTodo = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTask = () => {
       
        axios.post('http://localhost:3001/todos', {
          title: taskTitle,
          description: description,
          completed: false
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

   
    return(
      <div style={{width: '30%', margin: 'auto', marginTop: '2rem', padding: '2rem'}}>
      <form >
      <div class="form-group">
        <label for="title">New Task Title</label>
        <input type="text" class="form-control" id="title" placeholder="Enter title" value={taskTitle} onChange={(e)=> setTaskTitle(e.target.value)}></input>
        
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" placeholder="..." value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
       
      </div>
      
      <button type="submit" class="btn btn-success my-3" onClick={handleAddTask}>Add</button>
    </form>
    </div>
  );
}

export default AddNewTodo;