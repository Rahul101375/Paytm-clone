import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BusinessConsumers from './BusinessConsumer';
import BusinessPayments from './BusinessPayment';
import BusinessSoftwares from './BusinessSoftware';
import BusinessFinaceService from './BusinessFinamce';
import BusinessDeveloper from './BusinessDeveloper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function BusinessAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<NavigateNextIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Consumer Payments</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <BusinessConsumers/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<NavigateNextIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Business Payments</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <BusinessPayments/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<NavigateNextIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Business Software</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BusinessSoftwares/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<NavigateNextIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Finicial Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BusinessFinaceService/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<NavigateNextIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BusinessDeveloper/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
