import React from 'react'
import axios from 'axios';
export function Weather(){
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
    return(
        
    )
}