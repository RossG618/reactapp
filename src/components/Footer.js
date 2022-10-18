import React from "react";
import { useHistory } from "react-router-dom";
import { Clock } from "./clock";
export default function Footer() {

  // Get the history object
const history = useHistory();

  const goBack = () => {
    // imperatively redirect back
history.goBack();
  }

  const goForward = () => {
    // imperatively redirect forward
history.goForward();
    
  }

  return (
    <div className="d-flex align-items-end ">

    <footer className=' h-50 bg-dark align-items-center  w-100'>
      <button className="rounded"  onClick={goBack}>Back</button>
      <div><Clock/></div>
      <button className="rounded" onClick={goForward}>Forward</button>
    </footer>
    </div>
  );
}
