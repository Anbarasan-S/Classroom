import React from 'react'
import { Link } from 'react-router-dom'

const YearData = () => {
    const renderData=()=>
    {
    let render=[];
    for(let ind=14;ind>=0;ind-=1)
        {
            let hr=`/main?year=${2008+ind}`;
            render.push(
                <div style={{margin:"2rem"}} id={ind}>
                <a href={hr}>{`${2008+ind}-${2012+ind}`}</a>
                <br/>
                </div>
            );       
        }
        return render;
    }
  return (
      <div>
          
    <div style={{color:"tomato"}}>
        <h3 >Select Year</h3>
        </div>
        {renderData()}
    </div>
  )
}

export default YearData