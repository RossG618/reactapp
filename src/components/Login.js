import React, { useState } from "react";
// import { signUp } from "../features/session/sessionSlice"
import { useDispatch } from "react-redux";
// import useHistory
import { useHistory } from "react-router-dom";
// import { selectCurrentUser } from "../features/session/sessionSlice";
// import { useSelector } from "react-redux";
import { logIn } from "../features/session/sessionSlice";
import { useAuth0 } from "@auth0/auth0-react";

//Function
export default function Login() {
  // const [user, setUser] = useState({username: "", email:"", password: ""});
  const [details, setDetails] = useState({username: "", email:"", password:""});
  const admin = {username: "admin", password: "alpha"}
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const [reveal, setReveal] = useState(false);
  // const currentUser = useSelector(selectCurrentUser)

  // Grab the history object
const history = useHistory();

const passHide = () => {
    setReveal(!reveal);
  }

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(Login({username: username, password: password}));
    // imperatively redirect the user to /profile
    if (details.username === admin.username && details.password === admin.password){
      // setUser({username: details.username, password:details.password});
      dispatch(logIn({username: details.username, password:details.password}));
      history.push('/account');

      console.log('logged in')
    }else {
      console.log('Wrong passkey');
      setError("Wrong Details");
    }
  }
  const { loginWithRedirect } = useAuth0();
  

  return (
    <div style={{ background: "#2c3e50"}} >
      <div className="d-flex justify-content-center mt-2  " style={{ background: "#2c3e50"}} >
      <section className="shadow rounded-2 bg-body p-3" >
        <div className="d-flex justify-content-center ">

          {/* <img src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?w=2000" alt="" width="370" height="240" className="rounded-1"/> */}
          <img src="https://cdn.auth0.com/manhattan/versions/1.3925.0/assets/badge.png" alt="" width="100" height="110" className="rounded-1"/>
        </div>
        <div className=" px-3 d-flex flex-column justify-content-center">
        <h1 className="text-success " style={{fontFamily: "franklin gothic"}}>Member Login</h1>
        <p className="text-center  mb-3">Enter login details </p>
        <p className="mb-0" style={{color: "red"}}>
        {error}
        </p>
        <form onSubmit={handleSubmit}  >
          <label htmlFor="username" className="h6">
            Username:
            </label>
            <div className="modal-content gap-1">
              <div className="input-group prefix mb-3">

              
              <span className="input-group-text p-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
</svg>
              </span>
              <input
              className="form-control input-group-text text-start " 
                id="username"
                name="username"
                onChange={e => setDetails( {...details, username: e.target.value})}
                value={details.username}
              />
              </div>
              <label htmlFor="password" className="h6">

              Password:
              </label>

              <div className="input-group prefix ">

              <span className="input-group-text p-0">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-lock" viewBox="0 0 16 16">
                  <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z"/>
                  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                </svg>
              </span>
              <input 
              className="form-control input-group-text text-start  "
                type={reveal ? "text" : "password"}
                id="password"
                onChange={e => setDetails( {...details, password: e.target.value})}
                value={details.password}
              />
              <span className="input-group-text px-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16" onClick={passHide}>
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
</svg>
              </span>

              </div>
              <button type="submit" className="btn btn-primary btn-lg rounded mt-3" onClick={() => loginWithRedirect()}>
                Login
              </button>
              
            </div>
            <div className="d-flex flex-row my-2">
              <hr className="w-50 mx-2"/>
              or
              <hr className="w-50 mx-2"/>
              
            </div>
            <div className="form-control d-flex card">
            <button type="submit" className="btn btn-outline-danger rounded-pill mt-3  ">
           
                Google
              </button>
              <button type="submit" className="btn btn-outline-success rounded-pill mt-3">
                Github
              </button>
              <button type="submit" className="btn btn-outline-secondary rounded-pill mt-3">
                Facebook
              </button>
            </div>
          
        </form>
      </div>
      </section>
      </div>
    </div>

  );
}
