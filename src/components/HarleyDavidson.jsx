import React from "react";
import "./about.css";
import { AutoLoginModal } from "./Modal";
import { HarleyD } from "./HarleyD-info";
export default function HarleyDavidson() {
 
const handleExpansion = () => {
 const card = document.getElementById('card');
    card.classList.toggle('expand');

  }
  
const handleEnquery = () => {
  const eForm = document.getElementById('eForm');
  if (!eForm.classList.contains('eForm-show')){
    eForm.classList.toggle('eForm-show');
    
  }
  eForm.classList.toggle('eForm-hide');
  }
  

 

const linkStyles = {
  "text-decoration": "none",
  "list-style": "none",


}
const linkURL = "https://www.harley-davidson.com/gb/en/motorcycles";
  
  return (
    
    <div className="position-relative" >

    <p className="d-flex justify-content-center ">
              This application contains snippets from various Codecademy articles. You can browse all our articles and read them in their entirety <a href="https://www.codecademy.com/articles">here</a>.
            </p>
    <section className="py-2 text-center bg-dark shadow rounded-1 ">
            <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-white">Make your choice</h1>
            <p className="lead text-white">Here at Harley-Davidson we create the ultimate combination of performance and style, the very life blood of motor engines we don't just build motorcycles, we are creating life through cold hard metal. </p>
            <div className="position-relative">
              <a href="/" className="btn btn-primary mx-2 col">COLLECTION</a>
              <a href="/" className="btn btn-outline-light mx-2 col" onClick={handleEnquery}>Make enquires</a>
              <AutoLoginModal />
            </div>
          </div>
            </div>
          </section>
      <main>
        <div>
      <div className="album py-5">
        <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {HarleyD.map(item => (
          <div className="col">
          <div className="card shadow-sm" id="card">
            <img src={item.image} alt=''/>
            <div className="card-body border-top">
              <h3>{item.title}</h3>
              <p className="card-text">
                {item.post}
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleExpansion}>View</button>
                  <button type="button"  className="btn btn-sm btn-outline-secondary"><a style={linkStyles} target="_blank" rel="noreferrer" href={`${linkURL}/nightster.html`}>Order</a></button>
                </div>
                <small className="text-muted">10 mins ago</small>
              </div>
            </div>
          </div>
        </div>
        ))}
        
      </div>
        </div>
      </div>
      
      </div>
     {/* <AdvertPopup trigger={timedPop} setTrigger={setTimedPop} /> */}
    
      </main>
    </div>
  );
}
