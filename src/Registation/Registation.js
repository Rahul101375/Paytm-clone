import React, { useEffect, useState } from 'react'
import { Container, Typography } from '@material-ui/core';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import FilledInput from '@material-ui/core/FilledInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './registation.css'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Country from './Country';
import Checkboxs from './Checkbox';
import {NavLink} from 'react-router-dom'


const localStorageData=()=>{
  let list = localStorage.getItem('userDetails');
  if(list){
    return JSON.parse(localStorage.getItem('userDetails'));
  }
  else{
    return [];
  }
}

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(2),
  },
  withoutLabel: {
    // marginTop: theme.spacing(3),
  },
  textField: {
    width: '40ch',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function RegistationForm() {

  const classes = useStyles();
  const [registation, setRegistation] = useState({
    email: '',
    firstName: '',
    lastName: '',
    showPassword: false,
    showCheckPassword: false,
  });

  const [user, setUser] = useState(localStorageData);



  const [pass, setPass] = useState('');
  const [comPass, setComPass] = useState('');

  const [allEntry, setAllEntry] = useState([]);
  const [errors, setError] = useState(false);

  const handlePassword = (e) => {
    setPass(e.target.value);
  }

  const handleComfirmPassword = (e) => {
    setComPass(e.target.value);
    if (pass === e.target.value) {
      setError(!errors);
    }
    else {
      setError(false);
    }
  }




  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setRegistation({ ...registation, [name]: value })
  }


  const handleClickShowPassword = () => {
    setRegistation({ ...registation, showPassword: !registation.showPassword });
  }

  const handleClickCheckShowPassword = () => {
    setRegistation({ ...registation, showCheckPassword: !registation.showCheckPassword });
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  }


  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = { ...registation, id: new Date().getTime().toString() };
    const newEmail = [{ email: registation.email, password: pass, id: new Date().getTime().toString() }];

    setAllEntry([...allEntry, newEntry]);

    setUser([...user,newEmail]);

    setRegistation({ registation: " ", email: " ", firstName: "", lastName: " " });
    setPass('');
    setComPass('');
  }

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(user))
  }, [registation.email]);

  return (
    <>
      <div className="Registation-background">
        {/* <Container > */}
          <Grid container spacing={0} justifyContent="center" alignItems="center" style={{padding:"20px 0 0 0"}}>
          <div className="registation-main">
            <Paper className={classes.paper} style={{borderTop:"10px solid #362e05"}}>
              <Grid item lg={12} xl={12} md={9} sm={6} >

                <Typography variant="h5" component="h3" align="center">
                  <div className="Registation-heading">Responsive Registation <br />Form</div>
                </Typography>
              </Grid>
              <form onSubmit={submitForm} action="">
                <div className="registation-email">
                  <div><EmailIcon /></div>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      type="email"
                      required
                      autoComplete="off"
                      name="email"
                      id="email"
                      value={registation.email}
                      onChange={handleChange}
                      placeholder="Email"
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        'aria-label': 'weight',
                      }}
                      labelWidth={0}
                    />
                  </FormControl>
                </div>


                <div className="registation-email">
                  <div><LockIcon /></div>
                  <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                    <FilledInput
                    required
                      type={registation.showPassword ? 'text' : 'password'}
                      autoComplete="off"
                      value={pass}
                      onChange={handlePassword}
                      name="password"
                      id="password"
                      placeholder="Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {registation.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>


                <div className="registation-email">
                  <div><LockIcon /></div>
                  <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                    <FilledInput
                      type={registation.showCheckPassword ? 'text' : 'password'}
                      autoComplete="off"
                      value={comPass}
                      onChange={handleComfirmPassword}
                      name="comfirmPassword"
                      id="comfirmPassword"
                      required
                      placeholder="Re-type-Password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickCheckShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {registation.showCheckPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <div className="registation-match">{errors ? ' ' : <span>doesn't Match</span>}</div>
                  </FormControl>
                </div>

                <Grid container justifyContent="center" alignItems="center" spacing={2} >
                  <Grid item lg={9} md={9} sm={6}>
                    <Grid container justifyContent="space-between">
                      <Grid item >
                        <div className="firstName-icon"><PersonIcon /></div>
                      </Grid>
                      <Grid item lg={5} md={4}>
                        <FormControl
                          className={clsx(classes.margin, classes.textField)}
                          variant="outlined"
                          style={{ width: "auto" }}
                        >
                          <OutlinedInput
                            autoComplete="off"
                            name="firstName"
                            required
                            id="firstName"
                            placeholder="First Name"
                            value={registation.firstName}
                            onChange={handleChange}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                          />
                        </FormControl>
                      </Grid>

                      <Grid item>
                        <div className="firstName-icon"><PersonIcon /></div>
                      </Grid>
                      <Grid item lg={5} md={4}>
                        <FormControl
                          className={clsx(classes.margin, classes.textField)}
                          variant="outlined"
                          style={{ width: "auto" }}
                        >
                          <OutlinedInput
                            autoComplete="off"
                            required
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            value={registation.lastName}
                            onChange={handleChange}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
                            labelWidth={0}
                          />
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <div className="registation-radio">

                  <div>
                    <Radio
                      // checked={selectedValue === 'a'}
                      // onChange={handleChange}
                      // value="a"
                      required
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'A' }}
                      size="small"
                    />
                    Male
                  </div>

                  <div>
                    <Radio
                      // checked={selectedValue === 'b'}
                      // onChange={handleChange}
                      // value="b"
                      name="radio-button-demo"
                      size="small"
                      inputProps={{ 'aria-label': 'B' }}
                    />
                    Female
                  </div>
                </div>

                <div>
                  <Country />
                </div>

                <div>
                  <Checkboxs />
                </div>

                <div>
                  <div className={classes.root}>
                    
                      <Button type="submit" variant="none" fullWidth="true">
                        {/* <div className="button-set"> */}
                      <div className="registation-button">
                        Registation
                        </div>
                        {/* </div> */}
                      </Button>

                      
                      <div className="registation-login">
                           <div>Have you account?
                             <NavLink to="/login" className="navLink-Login">Login</NavLink>
                           </div>
                        </div>
                      {/* <div className="registation-login">
                        <div>Hello</div>
                        </div> */}
                    
                  </div>
                </div>
              </form>
            </Paper>
            </div>
          </Grid>
        {/* </Container> */}
      </div>
    </>

  )
}

export default RegistationForm