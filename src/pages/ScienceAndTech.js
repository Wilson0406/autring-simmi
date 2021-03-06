import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MainStore from '../MainStore'
function ScienceAndTech() {
    const [firstSATData,setFirstSATData]=useState();
    const [secSATData,setSecSATData]=useState();
    const [thirdSATData,setThirdSATData]=useState();
    const [fourthSATData,setFourthSATData]=useState();
  
   
    const url1=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=science,technology&country=in&page=0`
    const url2=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=science,technology&country=in&page=1`
    const url3=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=science,technology&country=in&page=2`
    const url4=`https://newsdata.io/api/1/news?apikey=pub_77195942fc8f677942e7d152f962d94dddc1&category=science,technology&country=in&page=3`

    const apiData1=()=>{
      axios.get(url1).then((response)=>{
            
             setFirstSATData(response.data.results);
            }).catch(()=>{
                throw new Error();
            })  
        
    }
  
    const apiData2=()=>{
      axios.get(url2).then((response)=>{
            
             setSecSATData(response.data.results);
            }).catch(()=>{
                throw new Error();
            })
             
    }

    const apiData3=()=>{
      axios.get(url3).then((response)=>{
            
             setThirdSATData(response.data.results);
            }).catch(()=>{
                throw new Error();
            })  
        
    }

    const apiData4=()=>{
      axios.get(url4).then((response)=>{
            
             setFourthSATData(response.data.results);
            }).catch(()=>{
                throw new Error();
            })  
        
    }
  
     useEffect(()=>{
      apiData1();
      apiData2();
      apiData3();
      apiData4();
    
     },[])
    
  return (
    <>
            <MainStore data={firstSATData} s_data={secSATData} t_data={thirdSATData} f_data={fourthSATData}></MainStore>
    </>
  )
}

export default ScienceAndTech;