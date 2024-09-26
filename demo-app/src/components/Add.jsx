import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Add = () => {
  return (
    <Box
    component="form"
    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="EID" variant="outlined" /><br />
    <TextField id="filled-basic" label="Employeename" variant="filled" /><br />
    <TextField id="standard-basic" label="Designation" variant="standard" /><br />
    <TextField id="standard-basic" label="Location" variant="standard" />
  </Box>
  )
}

export default Add
