import React, { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
export function PasswordUpdate() {

    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlePasswordChange = e => {
        // Getting the value and name of the input which triggered the change
        const value = e.target.value.replace(/[^A-Za-z]/g, "*");
        const name = e.target.name;
    
        // Updating the input's state
        setPassword({
          [name]: value
        });
      };


const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
      return(
        <Modal show={show} style={{transform: "translate(0%, 20%)"}}>
        <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Update User and Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex'>
          <div>
            <label htmlFor="Username">User:</label>
            <input type="username" name="username" id="Username"  required/>
          </div>
          <div>
            <label htmlFor="Password">Pass:</label>
            <input type="passowrd" name='password' id='Password' value={password} onChange={e => handlePasswordChange(e)}  placeholder="Password" required />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" >Submit</Button>
        </Modal.Footer>
      </Modal>
      )
}