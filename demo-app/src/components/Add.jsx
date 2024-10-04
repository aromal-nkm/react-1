import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = ({person}) => {
  const [employee,setEmployee]=useState({eId:person.EID,
    eName:person.EName,
    eDept:person.Designation,
    eLocn:person.Locn})
  let fetchvalue=(e)=>{

    // console.log(e)
    setEmployee({...employee,[e.target.name]:e.target.value})
  }
  let sendData=(e)=>{
    console.log(employee)
  }
  return ( <div>
    <h2>NEW EMPLOYEE</h2>
    <TextField  id="outlined-basic" label="Employee ID" name='eId'
   value={employee.eId} 
     variant="outlined" onChange={fetchvalue} /><br />
    <TextField  id="outlined-basic" label="Employee Name" variant="outlined" name='eName' 
    value={employee.eName} 
     onChange={fetchvalue} /><br />
    <TextField   id="outlined-basic" label="Employee dept" variant="outlined" name='eDept' 
    value={employee.eDept} 
    onChange={fetchvalue}/><br />
    <TextField   id="outlined-basic" label="Employee location" variant="outlined" name='eLocn' 
    value={employee.eLocn}
      onChange={fetchvalue}/> <br /><br />
    <Button onClick={sendData} variant="contained">submit</Button> <br /></div>
  )
}

export default Add