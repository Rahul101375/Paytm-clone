import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Pensions from '../../../HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/Pension';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15%',
    position:"fixed",
    margin:"-140px 0px 100px 210px",
    padding:"5px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function BusinessServiceItemTwo() {
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
            to='../../../HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/Pension'
            activeClassName
            className="navLink">
            Pension
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
            to='../../../HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/MutualFund'
            activeClassName
            className="navLink">
            Mutual Funds
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/FinacialService/Wealth/PaytmGold'
            activeClassName
            className="navLink">
            Paytm Gold
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
