import React, { useState } from "react";
// import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
// import useHistory
import { useHistory } from "react-router-dom";
import { selectCurrentUser } from "../features/session/sessionSlice";
import { useSelector } from "react-redux";

export default function Login () {

  const [username] = useState('theSpartan');
  const [password] = useState('aa');
  const dispatch = useDispatch();
  
  // Grab the history object
const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(Login({username: username, password: password}));
    // imperatively redirect the user to /profile
    history.push('/profile')
  }

  return (
    <div>
      <div className="d-flex justify-content-center mt-3 ">
      <section className="shadow p-3 rounded-2">
        <h1>Login details</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <div className="modal-content">
              <input
                id="username"
                // onChange={(e) => setUsername(e.currentTarget.value)}
              />Password
              <input
                type="password"
                id="password"
                // onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </div>
          </label>
        </form>
      </section>
      </div>
    </div>

  );
}
