import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {TaskContext} from '../App';

const EditTask = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [inProgress, setInProgress] = useState(false);

  const {id, setEditFlag, url} = useContext(TaskContext);
  

  useEffect(() => {
    console.log(id);
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        setTaskTitle(res.data.title);
        setDescription(res.data.description);
        res.data.completed === true?setCompleted(true):setInProgress(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const saveHandler = () => {
    console.log(id);
    console.log(completed, inProgress);
    axios.put(`${url}/${id}`, {
        id: id,
        title: taskTitle,
        description: description,
        completed: completed===true && inProgress===false?true:false
      })
      .catch(function (error) {
        console.log(error.message);
      });
     
     setEditFlag(false);
     window.location.reload();
  };

  const checkInProgress = (e) => {
    setInProgress(e.target.checked);
    setCompleted(!e.target.checked);
  }

  const checkCompleted = (e) => {
    setInProgress(!e.target.checked);
    setCompleted(e.target.checked)
  }

  return (
    <div
      id="edit-task"
      style={{
        width: "30%",
        margin: "auto",
        marginTop: "2rem",
        padding: "2rem",
      }}
    >
      <form>
        <div class="form-group">
          <label for="title">Task Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            placeholder="..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={inProgress} onChange={(e)=> checkInProgress(e)} ></input>
            <label class="form-check-label" for="flexRadioDefault1">
                In Progress
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={completed} onChange={(e)=>checkCompleted(e)}></input>
            <label class="form-check-label" for="flexRadioDefault2">
                Completed
            </label>
        </div>
        <button
          type="submit"
          class="btn btn-success my-3"
          onClick={saveHandler}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTask;
