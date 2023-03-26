import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Container, Row } from "react-bootstrap";

const AddTodo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
  });
  const [errors, setErrors] = useState([]);

  function handleSubmit(event){
    event.preventDefault()

    // console.log(formData)

    fetch ('http://localhost:3000/todos',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => {
      if(response.ok){
        response.json().then((formData) => setFormData(formData));
        console.log(setFormData)
      }else {
        response.json().then((errors) => setErrors(errors.error))
      }
    })
  }

  return (
    <Container>
      <Row>
        <FormGroup>
          <Label for="first">Title</Label>
          <Input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Enter a preferred Title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Description</Label>
          <Input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Enter a Description"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Status</Label>
          <Input
            type="text"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })
            }
            placeholder="CREATED, STARTED, COMPLETED or CANCELLED"
          />
        </FormGroup>
        <FormGroup>
          <Label for="last">Priority</Label>
          <Input
            type="text"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })
            }
            placeholder="LOW, MEDIUM or HIGH"
          />
        </FormGroup>

        <Button onClick={handleSubmit}>Submit</Button>
      </Row>
    </Container>
  );
};

export default AddTodo;
