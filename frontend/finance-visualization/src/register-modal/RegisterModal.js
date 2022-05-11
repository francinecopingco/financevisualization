import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './RegisterModal.css'
import {default as unicorn} from '../images/unicorn.svg'


function openRegisterModal() {

    return (
        <div>     
                <Modal 
                 centered
                 ></Modal>
                <Modal.Dialog>
                    <Modal.Header>                 
                        <Modal.Title>Register and Be A Unicorn</Modal.Title>
                        <img src={unicorn} />
                    </Modal.Header>

                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter username" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="monthlyIncome">
                            <Form.Label>Monthly Income</Form.Label>
                            <Form.Control type="number" placeholder="Monthly Income" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="household">
                            <Form.Label>Household</Form.Label>
                            <Form.Select>
                            <option>Test1</option>
                            </Form.Select>
                        </Form.Group>

                    </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="btn btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                    Register
                    </Button>
                    </Modal.Footer>
                </Modal.Dialog>
        </div>
    )
  }
  
  export default openRegisterModal;
  