import React, { useContext, useState } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './login.css'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { gray } from '@material-ui/core/colors/grey';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { NavLink, Redirect } from 'react-router-dom';
import AndirodLogo from '../Assests/Logo/andriod.jpg'
import LoginValidation from './LoginValidation';


const localStoreData=()=>{
    let list= localStorage.getItem('userDetails');

    if(list){
        return JSON.parse(localStorage.getItem('userDetails'));
    }
    else{
        return [];
    }
}
const GrayCheckbox = withStyles({
    root: {
      color: gray,
      '&$checked': {
        color: gray,
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
         flexGrow: 1,
        '& > *': {
            margin: theme.spacing(3),
            width: '62ch',
        },
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius:'12px',
        boxShadow:"0 3px 7px 0",
        color: theme.palette.text.secondary,
    },
}));

function Login() {

    const classes = useStyles();
    const[localData,setLocalData] = useState(localStoreData);
    const[comfirmLogin,setComfirmLogin] = useState(false);


    const[login, setLogin] = useState({
        email:'',
        password:''
    });

    const handleChange=(e)=>{
        const name=e.target.name;
        const values=e.target.value;
        
        const newEntry=({...login,[name]:values})

        setLogin(newEntry);
        

    }

    const handleSubmit=(e)=>{
           e.preventDefault();
    } 

    const handleLogin=(e)=>{

    }


    return (
        <>
            <Container maxWidth="md">
                <Typography component="h2"  align="center" >
                    <div className="Login-main">
                        {/* <div className="Logo-png">
                            <img src={Logins} alt="Logo" width="90px" height="70px" />
                        </div> */}

                        <Paper className={classes.paper}>
                            <Grid container spacing={0} lg={12}>
                                <Grid item lg={3} md={3} sm={3} className="andriod-border">
                                    <div className="Company-main-logo-set">
                                    <img src={AndirodLogo} alt="Logo" className="Company-logo"/>
                                    <div className="Logo-name">Your company logo</div>
                                    </div>
                                </Grid>
                                <Grid item lg={9} md={9} sm={9}>
                                    <Typography >
                                        <div className="Login-title">Log In</div>
                                    </Typography>


                                    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                                        <Typography align="left">
                                            <TextField
                                                fullWidth="true"
                                                id="standard-basic"
                                                label="Email"
                                                type="email"
                                                required
                                                name="email"
                                                value={login.email}
                                                onChange={handleChange}
                                            />
                                        </Typography>

                                        <Typography align="left">
                                            <TextField
                                                // id="standard-basic" 
                                                fullWidth="true"
                                                label="Password"
                                                type="password"
                                                required
                                                name="password"
                                                value={login.password}
                                                onChange={handleChange}
                                            />
                                        </Typography>
                                       <div className="submit-login">
                                        <FormControlLabel
                                            control={<GrayCheckbox 
                                                // checked={state.checkedG} 
                                                // onChange={handleChange} 
                                                // name="checkedG" 
                                                />}
                                            label="Remember Me !"
                                        />

                                        
                                        <Button
                                        type="submit"
                                        value={comfirmLogin}
                                        onClick={handleLogin}
                                        >
                                             {/* <NavLink to="/dashboard" activeClassName className="navLink"> */}
                                                 Login
                                                 {/* </NavLink> */}
                                        </Button>
                                        </div>
                                    </form>

                                    <div className="Login-to-Register">
                                        Don't have account ? 
                                        <NavLink to="/registation" activeClassName className="navLink">Register Here</NavLink>
                                    </div>
                                </Grid>
                            </Grid>

                        </Paper>
                    </div>
                    {/* </div> */}
                </Typography>
            </Container>
            
        </>
    )
}

export default Login