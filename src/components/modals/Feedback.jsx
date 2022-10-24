import React, { useState, useEffect} from 'react';
import { Modal  } from "react-bootstrap";
export default function FeedBack(){
const [show, setShow] = useState(false);

useEffect(() => {
    setTimeout(() => {
        setShow(() => true)
    }, 4000)
}, [])
const handleClose = () => setShow(false);

    return(
        <div>

<Modal show={show} style={{transform: "translate(0%, 20%)"}} className='d-flex flex-row'>
    <Modal.Header closeButton onClick={handleClose}>
            <Modal.Title>Please give us your feedback</Modal.Title>
        </Modal.Header>
        <img src="https://albantsh.co.uk/wp-content/uploads/2021/09/feedback-4746811_1920-1030x687.png" alt="" 
                 className='w-50 align-self-center'
                 />
        <Modal.Body className='d-flex align-items-center flex-row' closeButton onClick={handleClose}>
         <div>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum deserunt ducimus voluptate laudantium quae possimus vel voluptatum aperiam, aliquid enim a perspiciatis laborum nihil!</p>
              {/* <Button variant="outline-primary" >Submit</Button> */}
         </div>
        </Modal.Body>
      
        
      </Modal>
      
        </div>

    )
}
