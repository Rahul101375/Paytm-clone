import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './consumeraccrodin.css'
import CommerceAccordion from './Commerce';
import FinanceAccordion from './FinaceServiceAccordion';
import HeaderInnerItem from './HeaderInerItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    
    flexBasis: '50%',
    flexShrink: 0,
  },
}));

export default function ConsumerAccrodion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
      console.log(panel);
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
          <Typography className={classes.heading}>Payments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="Consumer-inside-item">
        <div className="Consumer-inside-item-1">
              <HeaderInnerItem/>
        </div>
              </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} 
      onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<NavigateNextIcon/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Commerce</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="Consumer-inside-item">
        <div className="Consumer-inside-item-2">
              <CommerceAccordion/>
        </div>
              </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} 
      onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<NavigateNextIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Financial Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="Consumer-inside-item">
        <div className="Consumer-inside-item-3">
            <FinanceAccordion/>
            </div>
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
