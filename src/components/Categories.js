import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../features/categories/categoriesSlice';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Category from './Category'
import { TILES } from '../app/data';
import { linkStyles } from '../app/App';
export default function Categories () {
  const categories = useSelector(selectCategories)
  const { path, url } = useRouteMatch()
const styleCard = {
  "width": "18rem"
}
  return (
    <div className="d-flex flex-wrap">
      <div>
        <h1>Categories</h1>
        <ul>
          {
            Object.keys(categories).map(category => {
              return (
                <li key={category}>
                  <Link to={`${url}/${category}`}>{category}</Link>
                </li>
              )
            })
          }
        </ul>
        <Route path={`${path}/:name`}>
          <Category />
        </Route>
      </div>
      <div>
        <div className="mx-auto d-flex flex-wrap ">
          <div class="card m-2" style={styleCard}>
                <img src={TILES['Black-Box'].img} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{TILES['Black-Box'].title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        
                <div class="card-body">
                  <a href="/" class="card-link"style={linkStyles}>Card link</a>
                  <a href="/" class="card-link"style={linkStyles}>Another link</a>
                </div>
            </div>
          <div class="card m-2" style={styleCard}>
                <img src={TILES['Auth-Oauth'].img} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{TILES['Auth-Oauth'].title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        
                <div class="card-body">
                  <a href="/" class="card-link"style={linkStyles}>{TILES['Auth-Oauth'].link1}</a>
                  <a href="/" class="card-link"style={linkStyles}>Another link</a>
                </div>
            </div>
          <div class="card m-2" style={styleCard}>
                <img src="https://www.imperva.com/learn/wp-content/uploads/sites/13/2020/03/thumbnail_Black-box.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
        
                <div class="card-body">
                  <a href="/" class="card-link" style={linkStyles}>Card link</a>
                  <a href="/" class="card-link" style={linkStyles}>Another link</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
