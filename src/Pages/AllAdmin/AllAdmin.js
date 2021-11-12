import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllAdmin = () => {
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-island-86831.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>#</b></TableCell>
            <TableCell align="center"><b>Name</b></TableCell>
            <TableCell align="center"><b>Email</b></TableCell>
            <TableCell align="center"><b>Role</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {admin.map((a, i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {a.name}
              </TableCell>
              <TableCell align="center">{a.email}</TableCell>
              <TableCell align="center">{a.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default AllAdmin;