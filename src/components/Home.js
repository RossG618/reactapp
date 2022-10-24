import React from 'react';
import { Comments } from './CommentsArray';
import FeedBack from './modals/Feedback';
import './home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  AOS.init();
  // const styles = {
  //   "width": "80%", "height": "300px", "border-radius": "21px 21px 0 0",
  // }


  const textStyle = {
    maxWidth: '100%',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const date = () =>{
    const dateObject = new Date();
    const day = dateObject.getDay();
    const month = dateObject.getMonth();
    const year = dateObject.getFullYear();
    
    const currentDate = `${day}/${month}/${year}`;
    return currentDate;
  }
 
  return(
    <div className='bg-body'>

   <div className='container mt-4'>
      <FeedBack/>
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-3 border shadow-lg bg-info ">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-white">Border hero with cropped image and shadows</h1>
        <p class="lead text-white">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-dark btn-lg px-4 ">History</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3" src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-docs.png" alt="" width="720"/>
      </div>
    </div>
  </div>

  <main class="d-flex col flex-wrap container mt-5" >
    {Comments.map((post) => (
      <div class="col-6">
      <div class="m-1 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative align-items-center " data-aos="zoom-in" data-aos-duration="700" data-aos-offset="300">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">{post.title}</strong>
          <h3 class="mb-0">{post.name}</h3>
          <div class="mb-1 text-muted">{date()}</div>
          <p class="card-text mb-auto" style={textStyle}>{post.review}</p>
          <a href="/" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block ">
          <img src={post.image} class="bd-placeholder-img rounded-start shadow" width="200" height="250" alt=''/>
          {/* <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
        </div>
      </div>
    </div>
    ))}
  </main>
    </div>
  )
}
