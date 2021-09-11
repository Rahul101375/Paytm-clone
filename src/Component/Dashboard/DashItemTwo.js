import React from 'react'
import {
    Box, Grid, Paper,
    Typography,
    Container,
    Card, CardActions, CardMedia
    , CardContent, Avatar, CardHeader
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import AllServices from '../../Assests/Logo/all.jpg'
import DTH from '../../Assests/Logo/dth.png'
import Phone from '../../Assests/Logo/phone1.png'
import Home from '../../Assests/Logo/home.jpg'
import Bulb from '../../Assests/Logo/bulb.jpg'
import Cylinder from '../../Assests/Logo/cylinder.png'
import CreditBill from '../../Assests/Logo/credit.png'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './dashboardtwo.css'
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import Recharge from '../dashboardItem/Reacharge';
// import Recharge from '../dashboardItem/Reacharge';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 345,
        background:'none',
        boxShadow:'none',
        '&:hover':{
            background:' #18191d',
            // opacity:'1'
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    // expandOpen: {
    //     transform: 'rotate(180deg)',
    // },
    avatar: {
        // backgroundColor: red[500],
        alignItems:'center',
    }
}));

export default function DashboardItemTwo() {

    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => { 
};

    return (
        <>
            <Box >
                <Paper className={classes.paper} style={{ background: "#4287f5" }}>
                    <Container maxWidth="lg" >
                        <Typography
                            variant="h4"
                            align="left"
                        >
                            <div className="Recharge-heading">Recharge & Pay Bills on Paytm.</div>
                        </Typography>

                        <Grid container spacing={0} justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Card className={classes.root} >
                                <CardActions >
                                    <div>
                                        <div className="Recharge-bill-icon">
                                    <CardHeader
                                    avatar={
                                        <Avatar 
                                        // aria-label="recipe" 
                                        className={classes.avatar}
                                        >
                                           <CardMedia
                                            component="img"
                                            image={Phone}
                                            />
                                        </Avatar>
                                    }
                                    />
                                    </div> 
                                    <CardContent>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <NavLink className="navLink" to="../dashboardItem/Reacharge">
                                        <Typography style={{color:"#f5f5f5"}}>
                                            <div >
                                            <div className="Reacharge-item-content">Recharge</div>
                                            <div className="Reacharge-item-content-1">Prepaid</div>
                                            <div className="Reacharge-item-content-1"> 
                                            <div>Mobile</div>
                                           <ChevronRightIcon />
                                           </div>
                                            </div>
                                        </Typography>
                                        </NavLink>
                                        </IconButton>
                                        </CardContent>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item>


                            <Card className={classes.root} >
                                <CardActions >
                                    <div>
                                        <div className="Recharge-bill-icon">
                                    <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                           <CardMedia
                                            component="img"
                                            image={Home}
                                            />
                                        </Avatar>
                                    }
                                    />
                                    </div> 
                                    <CardContent>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            // onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <NavLink className="navLink" to="../dashboardItem/Reacharge">
                                        <Typography style={{color:"#f5f5f5"}}>
                                            <div >
                                            <div className="Reacharge-item-content">Pay</div>
                                            <div className="Reacharge-item-content-1">Rent</div>
                                            <div className="Reacharge-item-content-1"> 
                                            <div>Payment</div>
                                           <ChevronRightIcon />
                                           </div>
                                            </div>
                                        </Typography>
                                        </NavLink>
                                        </IconButton>
                                        </CardContent>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item>

                            <Card className={classes.root} >
                                <CardActions >
                                    <div>
                                        <div className="Recharge-bill-icon">
                                    <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                           <CardMedia
                                            component="img"
                                            image={Bulb}
                                            />
                                        </Avatar>
                                    }
                                    />
                                    </div> 
                                    <CardContent>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            // onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <NavLink className="navLink" to="../dashboardItem/Reacharge">
                                        <Typography style={{color:"#f5f5f5"}}>
                                            <div >
                                            <div className="Reacharge-item-content">Pay</div>
                                            <div className="Reacharge-item-content-1">Electricity</div>
                                            <div className="Reacharge-item-content-1"> 
                                            <div>Bill</div>
                                           <ChevronRightIcon />
                                           </div>
                                            </div>
                                        </Typography>
                                        </NavLink>
                                        </IconButton>
                                        </CardContent>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item>

                            <Card className={classes.root} >
                                <CardActions >
                                    <div>
                                        <div className="Recharge-bill-icon">
                                    <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                           <CardMedia
                                            component="img"
                                            image={DTH}
                                            />
                                        </Avatar>
                                    }
                                    />
                                    </div> 
                                    <CardContent>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            // onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <NavLink className="navLink" to="../dashboardItem/Reacharge">
                                        <Typography style={{color:"#f5f5f5"}}>
                                            <div >
                                            <div className="Reacharge-item-content">Recharge</div>
                                            <div className="Reacharge-item-content-1">DTH</div>
                                            <div className="Reacharge-item-content-1"> 
                                            <div>Connection</div>
                                           <ChevronRightIcon />
                                           </div>
                                            </div>
                                        </Typography>
                                        </NavLink>
                                        </IconButton>
                                        </CardContent>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item>
  
                            <Card className={classes.root} >
                                <CardActions >
                                    <div>
                                        <div className="Recharge-bill-icon">
                                    <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                           <CardMedia
                                            component="img"
                                            image={Cylinder}
                                            />
                                        </Avatar>
                                    }
                                    />
                                    </div> 
                                    <CardContent>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            // onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <NavLink className="navLink" to="../dashboardItem/Reacharge">
                                        <Typography style={{color:"#f5f5f5"}}>
                                            <div >
                                            <div className="Reacharge-item-content">Book</div>
                                            <div className="Reacharge-item-content-1">gas</div>
                                            <div className="Reacharge-item-content-1"> 
                                            <div>Cylinder</div>
                                           <ChevronRightIcon />
                                           </div>
                                            </div>
                                        </Typography>
                                        </NavLink>
                                        </IconButton>
                                        </CardContent>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item>

                            <Card className={classes.root} >
                                <CardActions >
                                    <div>
                                        <div className="Recharge-bill-icon">
                                    <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                           <CardMedia
                                            component="img"
                                            image={CreditBill}
                                            />
                                        </Avatar>
                                    }
                                    />
                                    </div> 
                                    <CardContent>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            // onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <NavLink className="navLink" to="../dashboardItem/Reacharge">
                                        <Typography style={{color:"#f5f5f5"}}>
                                            <div >
                                            <div className="Reacharge-item-content">Pay</div>
                                            <div className="Reacharge-item-content-1">Credit</div>
                                            <div className="Reacharge-item-content-1"> 
                                            <div>Bill</div>
                                           <ChevronRightIcon />
                                           </div>
                                            </div>
                                        </Typography>
                                        </NavLink>
                                        </IconButton>
                                        </CardContent>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item>

                            <Card className={classes.root} >
                                <CardActions >
                                    <div>
                                        <div className="Recharge-bill-icon">
                                    <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" className={classes.avatar}>
                                           <CardMedia
                                            component="img"
                                            image={AllServices}
                                            />
                                        </Avatar>
                                    }
                                    />
                                    </div> 
                                    <CardContent>
                                        <IconButton
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]: expanded,
                                            })}
                                            // onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <NavLink className="navLink" to="../dashboardItem/Reacharge">
                                        <Typography style={{color:"#f5f5f5"}}>
                                            <div >
                                            <div className="Reacharge-item-content">All</div>
                                            <div className="Reacharge-item-content-1">Payment</div>
                                            <div className="Reacharge-item-content-1"> 
                                            <div> Service</div>
                                           <ChevronRightIcon />
                                           </div>
                                            </div>
                                        </Typography>
                                        </NavLink>
                                        </IconButton>
                                        </CardContent>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Box>
        </>
    )
}