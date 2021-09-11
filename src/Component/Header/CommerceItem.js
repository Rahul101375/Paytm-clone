import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
// import CommerceCloth from '../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Cloth';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200%',
    margin:"-70px auto auto",

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
}));

export default function CommerceAccordionItem() {
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
            to="../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Cloth"
            activeClassName
            className="navLink">
            Clothing
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
          <NavLink 
            to="../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Eloctronics"
            activeClassName
            className="navLink">
            Electronics
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
            to="../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Mobile"
            activeClassName
            className="navLink">
            Mobiles & Tablets
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
            to="../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Kicten"
            activeClassName
            className="navLink">
            Home & Kictens
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
            to="../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Grecoy"
            activeClassName
            className="navLink">
            Health & Grocery
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
            to="../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Grecoy"
            activeClassName
            className="navLink">
            Footwear
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
            to="../../HeaderInsideItem/PaytmConsumerItem/Commerce/Shop/Gadgets"
            activeClassName
            className="navLink">
            Use Gadgets
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
