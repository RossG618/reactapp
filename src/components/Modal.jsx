import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

export function AutoLoginModal(){
const [show, setShow] = useState(false);

useEffect(() => {
    setTimeout(() => {
        setShow(() => true)
    }, 4000)
}, [])
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
    return(
        <div className='overlay'>
             {/* <div
        className="d-flex align-items-center justify-content-center" >
        <Button variant="primary" onClick={handleShow}>
          Launch Form modal
        </Button>
      </div> */}
      <Modal show={show} style={{transform: "translate(0%, 20%)"}}>
        <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex'>
          <div>
            <label htmlFor="Username">User:</label>
            <input type="username" name="username" id="Username" required/>
          </div>
          <div>
            <label htmlFor="Password">Pass:</label>
            <input type="passowrd" name='password' id='Password' required />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" >Submit</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}