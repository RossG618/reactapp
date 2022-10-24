// import { current } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Link, useRouteMatch, Redirect } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";


export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
  const {url, path} = useRouteMatch();
  // use loggedIn to return a Redirect
    if (!loggedIn) {
      return (
      <Redirect to='/sign-up' />
      );
  }
  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`${url}/edit`}>Edit</Link>
      {/* Render a route for EditProfileForm */}
      <Route path={`${path}/edit`}>
        <EditProfileForm />
      </Route>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Profile information</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder={currentUser.firstname} required=""/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder={currentUser.lastname} required=""/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="username" class="form-control" id="username" placeholder={currentUser.username}  required=""/>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div class="col-12">
              <label for="password" class="form-label">Password</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="password" class="form-control" id="password" placeholder={currentUser.password}  required=""/>
              <div class="invalid-feedback">
                  Your password is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder={currentUser.email} />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder={currentUser.address} required=""/>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
                <option>Great Britain</option>
                <option>Canada</option>
                <option>France</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required=""/>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <button class="w-100 btn btn-primary btn-lg" type="submit">Complete Registration</button>
        </form>
      </div>
      
    </main>
  )
}
