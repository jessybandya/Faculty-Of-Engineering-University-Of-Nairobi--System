import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { Modal } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth, db } from '../../../firebase';
import { Space, Spin } from 'antd';
import { toast } from "react-toastify"


const theme = createTheme();

function Viewevent({ description, title, venue, date, status, eventId, posterImage }) {          

  return (
    <>
    <Paper sx={{ width: '100%' }}>

    <div className="item">
        <div className="event-bx">
          <div className="action-box">
            <img src="assets/images/event/pic3.jpg" alt="" />
          </div>
          <div className="info-bx d-flex">
            <div>
              <div className="event-time" style={{backgroundColor:'#2a68af'}}>
                <div className="event-date">FoE</div>
                <div className="event-month">UoN</div>
              </div>
            </div>
            <div className="event-info">
              <h4 className="event-title"><a href="#">{title}</a></h4>
              <ul className="media-post">
                <li><a href="#"><i className="fa fa-clock-o" />{date}</a></li>
                <li><a href="#"><i className="fa fa-map-marker" />{venue}</a></li>
              </ul>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      

    <hr />
    <center style={{color:'#2a68af',fontWeight:'bold'}}>EVENT's POSTER</center>
    <hr />
    {posterImage === "" ?(
        <center style={{fontWeight:'bold'}}>No Poster </center>
    ):(
      <div style={{padding:15}}>
      <img src={posterImage} style={{width:'100%', objectFit:'contain'}} alt={title} />
      </div>
    )}
  </Paper>

  </>
  )
}

export default Viewevent