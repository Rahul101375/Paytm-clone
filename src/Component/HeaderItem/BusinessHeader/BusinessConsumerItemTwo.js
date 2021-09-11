import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import PaymentGate from '../../../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OnlinePayment/PaymentGateway';
import { NavLink } from 'react-router-dom';
// import PaymtQR from '../../../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/PaytmQR';

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

export default function BusinessConsumersItemTwo() {
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
            to='../../../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/PaytmQR'
            activeClassName
            className="navLink">
            Paytm QR
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
            to='../../../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/Soundbox'
            activeClassName
            className="navLink">
            Sound Box
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
            to='../../../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/SmartPOS'
            activeClassName
            className="navLink">
            Smart POS
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/PaytmBusinessItem/ConsumerPaymet/OfflinePayment/AllInOnePos'
            activeClassName
            className="navLink">
            All In One POS
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
