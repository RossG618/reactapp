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
    <footer >
      <button onClick={goBack}>Back</button>
      <div><Clock/></div>
      <button onClick={goForward}>Forward</button>
    </footer>
  );
}
