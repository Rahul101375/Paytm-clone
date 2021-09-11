import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '250%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
}));

export default function HeaderInnerItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
 

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} 
      onChange={handleChange('panel1')}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
           <NavLink 
           to="../../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/BillPayment" 
           activeClassName 
           className="navLink">
              Bill Payment & Recharge
              </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <NavLink to="../../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/SendMoney" 
           activeClassName 
           className="navLink">
              Send Money to Anyone
              </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            <NavLink to="../../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/OnlinePayment" 
           activeClassName 
           className="navLink">
            Online Payments
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            <NavLink to="../../HeaderInsideItem/PaytmConsumerItem/ConsumerPayment/storePayment" 
           activeClassName 
           className="navLink">
             Stort Payments
           </NavLink>
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
