import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function TodosPage() {
  const [data, setData] = useState([]);
  const [editTodo, setEditTodo] = useState([])
  
  useEffect(() => {
    setData([]);
    fetch("http://localhost:3000/todos")
      .then((response) => {
          // console.log(response);
        return response.json();
      })
      .then((responseData) => {
        // console.log(responseData.data);
        setData(responseData.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEditTodo = (id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editTodo)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setEditTodo(data)
    })
    .catch((error) => {
      console.error(error);
    });    
  }

  const handleDeleteTodo = (id) => {
    fetch (`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data.filter((todo) => todo.id !== id))
      })
      .catch((error) => {
        console.error(error)
      })
  }
  

  return (
    <Container>
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date Created</th>              
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((todo) => (
              <tr key={todo.id}
              onClick={() => handleEditTodo(todo.id)}
              style={ {cursor: 'pointer'} }
              >
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.created_at}</td>                
                <td>
                  <Badge
                    bg={
                      todo.priority === "HIGH"
                        ? "danger"
                        : todo.priority === "MEDIUM"
                        ? "warning"
                        : "primary"
                    }>
                    {todo.priority}
                  </Badge>{" "}
                </td>
                <td>
                  <Badge
                    bg={
                      todo.status === "COMPLETED"
                        ? "info"
                        : todo.status === "STARTED"
                        ? "dark"
                        : "success"
                    }>
                    {todo.status}
                  </Badge>{" "}
                </td>
                <td>
                    <div className="d-flex">
                      <Button variant="secondary" onClick={() => handleEditTodo} >Edit</Button>{" "}
                      <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                    </div>
                </td>

              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="info" size="lg" onClick={ event => window.location.href='/addtodo' }>
          Add a Task
        </Button>
      </Row>
    </Container>
  );
}

export default TodosPage;
