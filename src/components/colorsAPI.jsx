import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Colors from './colors';

export default function ColorsAPI() {

    const [Data, setData] = useState({
        Company:'',
        Description:'',
      });
      const [colorsData, setColorsData] = useState([]);
      useEffect(() => {
        axios.get('https://reqres.in/api/unknown')
        .then(res=> {
          console.log('Respone from API', res)
          console.log('Home Data', res.data.ad)
          let companyData = res.data;
          setData({Company:companyData.support.url, Description:companyData.support.text})
          console.log('Colors Data', res.data.data)
    
          setColorsData(res.data.data)
        })
        .catch(err=>{
          console.log(err);
        })
      }, [])
        return (
            <div className='container my-5'>
              <h1> {Data.Company} </h1>
              <p>{Data.Description}</p>
              <Colors data={colorsData} />
            </div>
        );
}
