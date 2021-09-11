import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {NavLink} from 'react-router-dom'
import {Box,} from '@material-ui/core'
import styled from 'styled-components';

const Thing=styled.div`
   display:block;
   margin:auto;
   padding:15px;
`

export default function SimpleBreadcrumbs() {
  return (
    <Box style={{background:"#bdbbb7"}}>
      <Typography  align="center">
        <Thing>
        No Wallet KYC Required😊😊😊to pay using UPI on Paytm.
        <NavLink to="#"
        className="navLink">&nbsp;&nbsp;&nbsp;Learn more</NavLink>
        </Thing>
          </Typography>
    </Box>
  );
}
