import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
// import PaytmCrditCard from '../../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Banking/PaytmCrditCard';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
}));

export default function FinanceAccordionItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Banking/PaytmCrditCard'
            activeClassName
            className="navLink">
            Paytm Credit Card
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
            <NavLink
            to='../../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Banking/savingAccount'
            activeClassName
            className="navLink">
            Saving Account
            </NavLink></Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
