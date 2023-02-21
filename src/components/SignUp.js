import React, { useState } from "react";
import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
// import useHistory
import { useHistory } from "react-router-dom";
import './signUp.css'
//
export default function SignUp () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  
  // Grab the history object
const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({username: username, password: password, email: email, firstname: firstname, lastname: lastname, address: address}));
    // imperatively redirect the user to /profile
    history.push('/profile')
  }

  return (
    <div  style={{ background: "#2c3"}} >
      <div className="d-flex justify-content-center mt-5 " >
        
            <section className="shadow p-3 rounded-2 bg-body">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Username
                  <div className="modal-content">
                    <input
                      id="username"
                      value={username}
                      required
                      onChange={(e) => setUsername(e.currentTarget.value)}
                    />Password
                    <input
                      id="password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    Email address
                    <input
                      id="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
        
                    First name
                    <input
                      id="firstname"
                      value={firstname}
                      required
                      onChange={(e) => setFirstName(e.currentTarget.value)}
                    />
                    Last name
                    <input
                      id="lastname"
                      value={lastname}
                      required
                      onChange={(e) => setLastName(e.currentTarget.value)}
                    />Address
                    <input
                      id="address"
                      value={address}
                      required
                      onChange={(e) => setAddress(e.currentTarget.value)}
                    />
                    <button type="submit" className="btn btn-info mt-3">
                      <span>Sign Up</span>
                    </button>
                  </div>
                </label>
              </form>
            </section>
      </div>
    
    </div>

  );
}
