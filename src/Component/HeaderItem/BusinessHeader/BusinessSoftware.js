import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import PosBilling from '../../../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/PosBilling';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15%',
    position:"fixed",
    margin:"-190px 0px 100px 190px",
    padding:"5px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function BusinessSoftwares() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<NavigateNextIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/PosBilling'
            activeClassName
            className="navLink">
            POS Billing
            </NavLink>
            </Typography>
        </AccordionSummary> 
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<NavigateNextIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/PaytmforBusinessApp'
            activeClassName
            className="navLink">
            Paytm for Business App
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<NavigateNextIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/AdvertingOnPaytm'
            activeClassName
            className="navLink">
            Adverting on Paytm
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
        //   expandIcon={<NavigateNextIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/BusinessSoftware/BusinessKhata'
            activeClassName
            className="navLink">
            Businesss Khata
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
