import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {TaskContext} from '../App';
import { useContext } from "react";
import '../App.css';

const Todo = (props) => {

  const { setEditFlag, setId, url } = useContext(TaskContext);

  const deleteHandler = async () => {
     const _id = props.item._id;
     console.log("Id:", _id)
     await axios.delete(`${url}/${_id}`);
     window.location.reload()
  }

  const editHandler = () => {
     setEditFlag(true);
     setId(props.item._id);
     const element = document.getElementById('edit-task');
     if(element){
      element.scrollIntoView({ behavior: 'smooth' });
     }
     
  }
  return (
    <Card className="p-3 my-3 rounded">
    
    <Card.Body>
     
        <Card.Title as="div" style={{backgroundColor: '#F0F0F0', borderRadius: '5px', padding: '0.5rem'}}>
          <strong>Title: {props.item.title}</strong>
        </Card.Title>
        <Card.Text as="h6"><strong>Description:</strong> {props.item.description}</Card.Text>
      <Card.Text as="h6" style={{fontStyle: 'italic'}}>{props.item.completed==true?"Completed": "In Progress"}</Card.Text>
      
      <Card.Text as="h5">
        <div className="my-3">
          <Button variant="warning" onClick={deleteHandler}>Delete</Button> <Button variant="success" id="todo-edit" onClick={editHandler}>Edit</Button>
          </div>
      </Card.Text>
      
    </Card.Body>
  </Card>
  );
};

export default Todo;
