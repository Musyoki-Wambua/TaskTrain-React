import React from "react";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function TodosPage() {
  return (
    <Container>
      <Row>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Date Created</th>
              <th>Due Date</th>
              <th>Priority </th>
              <th>Status</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Exam</td>
              <td>Wednesday</td>
              <td>Saturday</td>
              <td>
                <Badge bg="primary">LOW</Badge>{" "}
              </td>
              <td>
                <Badge bg="success">CREATED</Badge>{" "}
              </td>
              <td><Button variant="secondary">Edit</Button>{' '}
                  <Button variant="danger">Delete</Button>{' '}
                </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Car Wash</td>
              <td>Thursday</td>
              <td>Sunday</td>
              <td>
                <Badge bg="warning">MEDIUM</Badge>{" "}
              </td>
              <td><Badge bg="dark">STARTED</Badge>{" "}</td>
              <td><Button variant="secondary">Edit</Button>{' '}
                  <Button variant="danger">Delete</Button>{' '}
                </td>
            </tr>
            <tr>
              <td>3</td>
              <td>BasketBall Game</td>
              <td>Friday</td>
              <td>Monday</td>
              <td><Badge bg="danger">HIGH</Badge>{" "}</td>
              <td><Badge bg="info">COMPLETED</Badge>{" "}</td>
              <td><Button variant="secondary">Edit</Button>{' '}
                  <Button variant="danger">Delete</Button>{' '}
                </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Task Train Project</td>
              <td>Friday</td>
              <td>Monday</td>
              <td><Badge bg="danger">HIGH</Badge>{" "}</td>
              <td><Badge bg="LIGHT">CANCELLED</Badge>{" "}</td>
              <td><Button variant="secondary">Edit</Button>{' '}
                  <Button variant="danger">Delete</Button>{' '}
                </td>
            </tr>
          </tbody>
        </Table>
        <Button variant="info" size="lg">Add a Task</Button>
      </Row>
    </Container>
  );
}

export default TodosPage;
