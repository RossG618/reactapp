import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice";
import { NavLink, Route } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Clock } from './clock';
import './header.css'
import { products } from './Products';
// Import the NavLink component.

export default function Header () {
  const [isShown, setIsShown] = useState(false);
  const [searchOn, setSearchOn] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }
const nameCall = () => {
  setIsShown(!isShown);
}
const searchCall = () => {
  setSearchOn(!searchOn);
}
const itemNum = () => {
    const itemCount = products.length;
  if (itemCount === 0){
    return 'No';
  }else{
    return itemCount
  }
}



  // Replace the 4 <a> tags with <NavLink> components
  return (
    <div className="d-flex  align-items-center justify-content-around ">
      <div><Clock/></div>
      <div className="header nav d-flex justify-content-center">
        <Dropdown>
        <Dropdown.Toggle variant="secondary d-flex align-items-center py-0" id="dropdown-basic">
         <NavLink className='nav-link text-light' to="/" exact>Home</NavLink>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
         <NavLink className='nav-link' to="/harley-davidson" exact>Harley-Davidson</NavLink>
      
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
         <NavLink className='nav-link ' to="/bmw">BMW</NavLink>
      
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
         <NavLink className='nav-link' to="/lamborghini">Lamborghini</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
          <NavLink className='nav-link nav-item' to="/about">About</NavLink>
          <NavLink className='nav-link nav-item' to="/articles">Articles</NavLink>
          <NavLink className='nav-link nav-item' to="/categories">Categories</NavLink>
          <NavLink to="/colors-api" className='full-rotate'>
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-palette full-rotate" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
      </svg>
         </NavLink>
          {
            currentUser.username ?
              <>
                <NavLink className='nav-link nav-item active' to="/profile">Profile</NavLink>
                <button onClick={handleLogout} className="logout"> Log Out </button>
              </> :
              <NavLink className=' nav-item btn btn-outline-secondary' to="/sign-up">Sign Up</NavLink>
            }
            <NavLink className=' nav-item btn btn-primary' to='/login'>Login</NavLink>
        </div>
        <div className="d-flex">
        
        {searchOn && (
        <input type='search' placeholder="Search" className="position-absolute shift-left" />
      )}
        
        <div >
        <NavLink class="link-secondary" to='' aria-label="Search" onClick={searchCall}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
        </NavLink>
        </div>
        <div className="d-flex align-items-center flex-column" >
          <NavLink to="/cart" >
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" onMouseEnter={nameCall} onMouseLeave={nameCall} >
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
          </NavLink>
          {isShown && (
        <div className='text-center position-absolute p-2 text-drop shadow' >
         <strong className="h3">{itemNum()}</strong> <br/>items in cart
        </div>
      )}
        </div>
        </div>
    </div>
  )
}
