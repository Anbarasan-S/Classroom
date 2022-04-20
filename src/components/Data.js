import React, { useState } from 'react'
import { Dropdown,Table } from 'react-bootstrap'
import { Heatmap } from "contribution-heatmap"

const Data = () => {
    const [selected,setSelected]=useState(false);
    const [month] = useState(["January","February","March","April","May","June","July","August","September","October","November","December"]);
const changeDept=(e)=>{
    setSelected(true);
    console.log(e.target.name);
}

const addMonth=()=>{
  let item=[];
  const mnth=month[new Date().getMonth()];
  item.push(<option value={mnth}>{mnth}</option>);
  month.map((i)=>{
    if(mnth!==i)
    item.push(
      <option value={i}>{i}</option>
      )  });
  return item;
  
}
  return (
      <div>
   {!selected&& <div style={{display:"flex",alignItems:"center",verticalAlign:"middle",justifyContent:"center",marginTop:"20rem"}}>
       <Dropdown >
  <Dropdown.Toggle variant="warning" id="dropdown-basic" style={{width:"25rem"}}>
    Select Dept
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item name="CSE" onClick={changeDept}>CSE</Dropdown.Item>
    <Dropdown.Item name="ECE" onClick={changeDept}>ECE</Dropdown.Item>
    <Dropdown.Item name="MECH" onClick={changeDept}>MECH</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </div>}
    {selected&&
    <div>
<select name="cars" id="cars" style={{width:"24rem",backgroundColor:"lightblue",height:"2rem"}}>
  {addMonth()}
</select>
    <Table >
  <thead>
    <tr>
      <th>Serial Number</th>
      <th>Student Name</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <th>3</th>
      <th>3</th>
      <th>3</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Max</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>Garey</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>}

    </div>
  )
}

export default Data