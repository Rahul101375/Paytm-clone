import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Abouts from '../../../HeaderInsideItem/CompanyItem/About';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '15%',
    position:"fixed",
    // margin:"-78px 0px 100px 210px",
    // padding:"5px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function CompanyAccordion() {
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
            to='../../../HeaderInsideItem/CompanyItem/About'
            activeClassName
            className="navLink">
            About
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
            to='../../../HeaderInsideItem/CompanyItem/InvestorRelation'
            activeClassName
            className="navLink">
            Investors Relations
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
            to='../../../HeaderInsideItem/CompanyItem/Board'
            activeClassName
            className="navLink">
            Board
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
            to='../../../HeaderInsideItem/CompanyItem/Polices'
            activeClassName
            className="navLink">
            Polices
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/CompanyItem/Fincails'
            activeClassName
            className="navLink">
            Finacials
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/CompanyItem/Notices'
            activeClassName
            className="navLink">
            Notices
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/CompanyItem/Blog'
            activeClassName
            className="navLink">
            Blog
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>
            <NavLink
            to='../../../HeaderInsideItem/CompanyItem/ContactUs'
            activeClassName
            className="navLink">
            Conatact Us
            </NavLink>
            </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
