import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "../components/Todo";
import { Container, Row, Col } from "react-bootstrap";
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
    <div style={{width: '30%', margin: 'auto', marginTop: '2rem'}}>

      <Container>
        <Row>

        {Array.from(todoList).map((todo) => (
          <Col sm={12} md={6} lg={4}>
          <Todo item={todo} key={todo._id}/>
          </Col>
          ))}
          </Row>
      </Container>
 
          </div>
  );
};

export default TodoListPage;
