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
  "font-size": "3rem",
}
    return(
        <div  >
          <div className='mb-4 '>
            <Carousel className='d-flex flex-column'  >
                {aboutData.map(data => (
                    <Carousel.Item interval={3000} >
                        <div className='d-flex justify-content-between align-items-center'>

                        <img
          className="d-block w-25"
          src={data.image}
          alt="First slide"
        />
        <Carousel.Caption className='position-sticky rounded h-25  px-2'>
          <h1 className='text-dark' style={titleStyles}>{data.title}</h1>
          <p className="text-dark lead">{data.para}</p>
        </Carousel.Caption>
        <img
          className="d-block w-25"
          src={data.image}
          alt="Slide"
        />
                        </div>
        
      </Carousel.Item>
                ))}
            
      
            </Carousel>
          </div>
          <div className="container bg-light shadow">
             <div className=' row mb-4 '>
            {arr1.map(item => (
                <div className="col-lg shadow m-3 bg-body rounded-1 border border-2 border-warning moveUp">
                    <div className=' d-flex flex-column justify-content-center ' >

        <img src={item.image} alt="" className=' rounded-circle align-self-center my-3 expandPic' width="120" height="120"/>
                    <h2 className="fw-normal">{item.title}</h2>
                <p>{item.post}</p>
                    <p className='text-muted'>{item.name}</p>
                    </div>
                {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                
              </div>
            ))}
        </div>
          </div>
       
        </div>
       
    )
    
}
