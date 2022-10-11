import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AdvertPopup() {
    const [timedPop, setTimedPop] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimedPop(true)
        }, 3000) 
    }, []);
 
    return(
        <div className='n'>
            <h1>hll</h1>
       <div class="bg-light p-5 rounded">
        <button className='btn btn-primary' onClick={() => { setTimedPop(false)}}>Close</button>
    <h1>Navbar example</h1>
    <p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
    <a class="btn btn-lg btn-primary" href="/docs/5.2/components/navbar/" role="button">View navbar docs »</a>
  </div>
  
        </div>
    );
}