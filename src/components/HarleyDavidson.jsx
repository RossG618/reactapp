import React from "react";
import { AutoLoginModal } from "./Modal";
import { HarleyD } from "./HarleyD-info";
import './harleyCss.css'
//#

const lineStyle = {
  maxWidth: '100%',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

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
  "color": "white"

}
const linkURL = "https://www.harley-davidson.com/gb/en/motorcycles";
  
  return (
    
    <div className="position-relative " style={{background: "#042a33"}}>

    
    <section className="py-2 text-center bg-dark shadow rounded-1 container-fluid ">
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
          <div className="card shadow-sm overflow-hidden border-0" id="card" >
            <img src={item.image} alt='pic' height='240px' className="rounded-top "/>
            <div className="card-body  bg-dark">
              <h3 className="text-warning">{item.title}</h3>
              <p className="card-text text-light"style={lineStyle}>
                {item.post}
                </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group gap-1 mx-auto">
                  <button type="button" className="btn btn-md btn-primary text-white rounded hovEffect overflow-hidden" onClick={handleExpansion}>View</button>
                  <button type="button" className="btn btn-md btn-primary  text-white rounded"><a style={linkStyles} target="_blank" rel="noreferrer" href={`${linkURL}/nightster.html`}>Order</a></button>
                </div>
                {/* <small className="text-muted">10 mins ago</small> */}
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
