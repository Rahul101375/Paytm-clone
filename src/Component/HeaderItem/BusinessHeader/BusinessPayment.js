import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import PayOuts from '../../../HeaderInsideItem/PaytmBusinessItem/BusinessPayment/Payouts';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15%',
    position:"fixed",
    margin:"-140px 0px 100px 190px",
    padding:"5px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function BusinessPayments() {
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
            to='../../../HeaderInsideItem/PaytmBusinessItem/BusinessPayment/Payouts'
            activeClassName
            className="navLink">
            Payouts
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
            to='../../../HeaderInsideItem/PaytmBusinessItem/BusinessPayment/NodalAccount'
            activeClassName
            className="navLink">
            Nodal Accounts
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
