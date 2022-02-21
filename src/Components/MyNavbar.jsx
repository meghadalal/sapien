import React, { Component } from 'react'
import { Navbar , Nav, Container} from 'react-bootstrap'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

export default class MyNavbar extends Component {
  render() {
    return (
    <div className='navbar'>
      <Navbar></Navbar>
    <Container> 
    <Navbar.Brand className='a'><strong><SmartToyOutlinedIcon/> Sapien Systems</strong></Navbar.Brand>
    <div className='b'>#BeAChangemaker</div>
        <div className='c'><NotificationsOutlinedIcon/>
        <AppsOutlinedIcon/>
        <InsertEmoticonOutlinedIcon/></div>
        </Container>
        </div>
    )
  }
}
