import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './LoginModal.css'


function openLoginModal() {

    return (
        <div>   
                <Modal 
                 centered
                 ></Modal>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Login</Modal.Title>
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
                    </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="btn btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                    Login
                    </Button>
                    </Modal.Footer>
                </Modal.Dialog>
        </div>
    )
  }
  
  export default openLoginModal;
  