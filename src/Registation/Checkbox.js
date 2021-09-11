import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { gray } from '@material-ui/core/colors/grey';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './checkbox.css'

const GrayCheckbox = withStyles({
  root: {
    color: gray,
    '&$checked': {
      color: gray,
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function Checkboxs() {
  const [state, setState] = React.useState({
    // checkedA: true,
    // checkedB: true,
    // checkedF: true,
    // checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <>
          <div className="checkbox-flex">
      <FormControlLabel
        control={<GrayCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="I agree with terms and condition"
        aria-required="true"
      />
      </div>

      <div className="checkbox-flex">
      <FormControlLabel
      aria-required="true"
        control={<GrayCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="I want to recive newsletter"
      />
      </div>
      </>
      
  );
}
