import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return ( <div>
    <TextField id="standard-basic" label="Employee ID" variant="standard" /><br />
    <TextField id="standard-basic" label="Employee Name" variant="standard" /><br />
    <TextField id="standard-basic" label="Employee dept" variant="standard" /><br />
    <TextField id="standard-basic" label="Employee location" variant="standard" /> <br /><br />
    <Button variant="contained">submit</Button> <br /></div>
  )
}

export default Add