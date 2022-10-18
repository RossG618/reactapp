import React, { useState } from "react";
// import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
// import useHistory
import { useHistory } from "react-router-dom";
import { selectCurrentUser } from "../features/session/sessionSlice";
import { useSelector } from "react-redux";
import { logIn } from "../features/session/sessionSlice";
export default function Login() {

  const [username] = useState('theSpartan');
  const [password] = useState('aa');

  const [user, setUser] = useState({username: "", email:"", password: ""});
  const [details, setDetails] = useState({username: "", email:"", password:""});
  const admin = {username: "admin", password: "alpha"}
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  // const currentUser = useSelector(selectCurrentUser)

  // Grab the history object
const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(Login({username: username, password: password}));
    // imperatively redirect the user to /profile
    if (details.username === admin.username && details.password === admin.password){
      setUser({username: details.username, password:details.password});
      dispatch(logIn({username: details.username, password:details.password}));
      history.push('/account');

      console.log('logged in')
    }else {
      console.log('Wrong passkey');
      setError("Wrong Details");
    }
  }

 
  return (
    <div >
      <div className="d-flex justify-content-center mt-3 ">
      <section className="shadow p-3 rounded-2">
        <h1>Login details</h1>
        <p className="text-danger mt-4 mb-0">
        {error}
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <div className="modal-content gap-1">
              <input
                id="username"
                name="username"
                onChange={e => setDetails( {...details, username: e.target.value})}
                value={details.username}
              />Password:
              <input
                type="password"
                id="password"
                onChange={e => setDetails( {...details, password: e.target.value})}
                value={details.password}
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
