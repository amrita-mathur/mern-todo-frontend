import React, { useState, useEffect } from "react";
import axios from "axios";
import Todo from "../components/Todo";
import { Container, Row, Col } from "react-bootstrap";


const TodoListPage = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/todos")
      .then((res) => setTodoList(res.data))
      .catch((err) => {
        setError(err.message);
      });
      
  }, []);

  return (
    <div style={{width: '30%', margin: 'auto', marginTop: '2rem'}}>

      <Container>
        <Row>

        {todoList.map((todo) => (
          <Todo item={todo} key={todo._id}/>
          ))}
          </Row>
      </Container>
 
          </div>
  );
};

export default TodoListPage;
