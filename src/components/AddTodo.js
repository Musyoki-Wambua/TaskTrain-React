import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { Container, Row } from "react-bootstrap";

const AddTodo = () => {
    return (
        <Container>
            <Row>
                <FormGroup>
                    <Label for="first">Title</Label>
                    <Input type="text"placeholder="Enter a preferred Title" />
                </FormGroup>
                <FormGroup>
                    <Label for="last">Description</Label>
                    <Input type="text" placeholder="Enter a Description"/>
                </FormGroup>
                <FormGroup>
                    <Label for="last">Status</Label>
                    <Input type="text" placeholder="Enter The Status of The Task "/>
                </FormGroup>
                <FormGroup>
                    <Label for="last">Priority</Label>
                    <Input type="text" placeholder="Task Priority"/>
                </FormGroup>

                <Button>Submit</Button>
            </Row>
        </Container>
    );
};

export default AddTodo;
