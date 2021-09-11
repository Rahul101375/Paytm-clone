import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FinanceAccordionItem from './FinaceAccrodionItem';
import './finaceservice.css'
import { NavLink } from 'react-router-dom';
// import Maoney from '../../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Money';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function FinanceAccordion() {
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
          expandIcon={<NavigateNextIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Banking</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <div className="banking-item">
                <div className="banking-item-1">
                   <FinanceAccordionItem/>
                </div>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Money'
            activeClassName
            className="navLink">
            Money 
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
            to='../../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/Insurance'
            activeClassName
            className="navLink">
            Insurance
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
            to='../../HeaderInsideItem/PaytmConsumerItem/FinacialServvice/postpaid'
            activeClassName
            className="navLink">
            Postpaid
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
