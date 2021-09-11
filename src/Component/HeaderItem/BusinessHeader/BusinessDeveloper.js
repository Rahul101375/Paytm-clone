import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import PaymentApi from '../../../HeaderInsideItem/PaytmBusinessItem/DeveloperService/PaymentApi';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15%',
    position:"fixed",
    margin:"-285px 0px 100px 190px",
    padding:"5px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function BusinessDeveloper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/DeveloperService/PaymentApi'
            activeClassName
            className="navLink">
            Payments API
            </NavLink>
            </Typography>
        </AccordionSummary> 
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/DeveloperService/Pai'
            activeClassName
            className="navLink">
            PAI
            </NavLink></Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
