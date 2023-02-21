import React from 'react';
import { Carousel } from 'react-bootstrap';
import {Array} from './aboutArray'
import { aboutData } from './AboutCarousel-Data';
import './about.css'
export default function About() {

const arr1 = Array;
// const linkURL = "https://www.harley-davidson.com/gb/en/motorcycles";

// const handleSelect = (selectedIndex, e) =>{
//     setIndex(selectedIndex);
// }

const titleStyles = {
  "font-family": "Brush Script MT",
  "font-size": "3.5rem",
}
    return(
        <div>
          <div className='mb-4 '>
            <Carousel className='d-flex flex-column'  >
                {aboutData.map(data => (
                    <Carousel.Item interval={3000} className="bg-dark ">
                        <div className='d-flex justify-content align-items-center '>

                        
        <Carousel.Caption className='position-sticky rounded p-0 mb-4 titleHov'>
          <div className="d-flex justify-content-center h-75 mb-4 border-2 border-bottom">
            <div className="position-absolute" style={{"z-index": "33"}}>
            <h1 className='text-dark mb-3 ' style={titleStyles}>{data.title}</h1>
            <p className="text-dark lead">{data.para}</p>
            </div>
            <div className="d-flex justify-content-center  bg-white w-75">
            <img
            className="d-block w-50 mt-5 transLeft"
            src={data.image}
            alt="Slide"
                    />
            <img
            className="d-block w-50 mt-5 transRight"
            src={data.image}
            alt="Slide"
                    />
            </div>
          </div>
        </Carousel.Caption>
       
                        </div>
        
      </Carousel.Item>
                ))}
            
      
            </Carousel>
          </div>
          <div className="container bg-light shadow">
             <div className=' row mb-4 '>
            {arr1.map(item => (
                <div className="col-lg shadow m-3 bg-body rounded-1 border border-2 border-warning moveUp p-0 h-100">
                    <div className=' d-flex flex-column justify-content-center ' >
                      <div className='d-flex justify-content-center backgroundChange'>
                  <img src={item.image} alt="" className='align-self-center  expandPic' />
                  </div>
                  <div className="px-3">
                      <h2 className="fw-normal">{item.title}</h2>
                       <p>{item.post}</p>
                      <p className='text-muted'>{item.name}</p>
                  </div>
                    </div>
                {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                
              </div>
            ))}
        </div>
          </div>
       
        </div>
       
    )
    
}
