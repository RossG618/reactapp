import React from 'react';
import { useState, useEffect } from 'react';
export function Clock(){
    const [time, setTime] = useState();


useEffect(() => { 
  setInterval(() => {
    const dateObject = new Date();

    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();
    
    const currentTime = `${hour} : ${minute}`;
    setTime(currentTime)
 }, 1000)
}, [])
return(
    <div className='border-bottom border-2 rounded-pill border-primary px-2 h3 text-white'>
        {time}
    </div>
)
}