import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

export function adModal(){
const [openModal, setOpenModal] = useState(false)
const [show, setShow] = useState(false);

useEffect(() => {
    setTimeout(() => {
        setShow(() => true)
    }, 5000)
}, [])
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
    return(
        <div className='overlay'>
             <div
        className="d-flex align-items-center justify-content-center" >
        <Button variant="primary" onClick={handleShow}>
          Launch Form modal
        </Button>
      </div>
      <Modal show={show} style={{transform: "translate(0%, 20%)"}}>
        <Modal.Header closeButton onClick={handleClose}>
            <ModalTitle>Login</ModalTitle>
        </Modal.Header>
        <Modal.Body>
        <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >Close Modal</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}