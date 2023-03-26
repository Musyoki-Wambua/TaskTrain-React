import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function TodosPage() {
  const [data, setData] = useState({
    title: '',
    description: '',
    status: '',
    priority: ''
  });
  
  // console.log(data)
  useEffect(() => {
    setData([])
    fetch("http://localhost:3000/todos")
      .then((response) => (response.json()))
      .then((data) => {
        setData(data)
      });
  }, []);

  return (
    <Container>
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Description</th>
              <th>Date Created</th>              
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.task}</td>
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
                    }
                  >
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
                    }
                  >
                    {todo.status}
                  </Badge>{" "}
                </td>
                <td>
                  <Button variant="secondary">Edit</Button>{" "}
                  <Button variant="danger">Delete</Button>{" "}
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
