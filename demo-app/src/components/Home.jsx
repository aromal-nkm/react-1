import React from 'react'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Home = () => {
const arr_obj=[{EID:1,EName:"AKHIL",Designation:"Manager",Locn:"TVM"},{EID:2,EName:"SANJU",Designation:"Project Leads",Locn:"Kochi"}]
  return (

    <>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EID</TableCell>
            <TableCell align="right">EName</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Locn</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {arr_obj.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.EID}
              </TableCell>
              <TableCell align="right">{row.EName}</TableCell>
              <TableCell align="right">{row.Designation}</TableCell>
              <TableCell align="right">{row.Locn}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </>

  )

}




export default Home
