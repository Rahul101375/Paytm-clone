import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import {NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Box,Grid,Paper,Typography,Container,Avatar} from '@material-ui/core'
import Image from '../../Assests/Image/mobileImg.png'
import Bulb from '../../Assests/Image/Eleblub.png'
import Cylinder from '../../Assests/Image/cylinderImg.png'
import DTH from '../../Assests/Image/dthImg.png'
import Education from '../../Assests/Image/eduImg.png'
import Fast from '../../Assests/Image/fastImg.webp'
import HomeImg from '../../Assests/Image/homeImg.webp'
import Loans from '../../Assests/Image/loanImg.webp'
import Stock from '../../Assests/Image/stockImg.png'
import Metro from '../../Assests/Image/mteroImg.png'
import Board from '../../Assests/Image/boardImg.png'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './dashindex.css'



function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius:"0"
    },
  }));

export default function SimpleDashboardBreadcrumbs() {

    const classes = useStyles()
  return (
      <>
      <Box >
          <Paper className={classes.paper} style={{background:"#002970"}}>
              <Container maxWidth="lg">
    <Breadcrumbs aria-label="breadcrumb" className="dash1-breadcrumb">
      <Grid container justifyContent="space-between" alignItems="center" lg={12} md={12} >
      <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Image} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Prepaid<span className="dash-ablic">/</span>Postpaid</div>
      </NavLink>
          </Grid>
      <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Bulb} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Electricity</div>
      </NavLink>
          </Grid>
      <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={HomeImg} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Rent Payment</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={DTH} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">DTH</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Metro} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Metro</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Board} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Boardband<span>/</span>Landline</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Fast} alt="Mobile" width="35px"/></div>
        <div className="dash-Title">Buy FASTag</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Education} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Education</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Loans} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Pay Loan</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Stock} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Invest in stock</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
          <div className="dash-Image"><img src={Cylinder} alt="Mobile" width="40px"/></div>
        <div className="dash-Title">Book a Cylinder</div>
      </NavLink>
          </Grid>
          <Grid item>
          <NavLink 
      color="inherit" 
    //   href="/" 
        to="#"
        activeClassName
        className="navLink"
      onClick={handleClick}>
        <div className="dash-Image-1">...</div>
        <div className="dash-Title-1">More</div>
      </NavLink>
          </Grid>
          </Grid>
    </Breadcrumbs>
    </Container>
    </Paper>
    </Box>
    </>
  );
}
