import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import './headeritem.css'
import { Container, Grid, Paper } from '@material-ui/core';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ConsumerAccrodion from './ConsumerAccrodin'
import BusinessAccordion from '../HeaderItem/BusinessHeader/Business';
import CompanyAccordion from '../HeaderItem/CompanyHeader/CompanyHeader';
import MenuIcon from '@material-ui/icons/Menu';



import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SimpleBreadcrumbs from '../breadcrumb/Breadcrumb';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
  },
}));


let theme = createTheme();
theme = responsiveFontSizes(theme);



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
//   paper: {
//     padding: theme.spacing(2),
//     // textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },

//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },

// }));

export default function HeaderItem() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [look, setLook] = useState(false);
  const [looks, setLooks] = useState(false);
  const [looked, setLooked] = useState(false);
  const [state, setState] = useState(false)
  // const open = Boolean(anchorEl);

  // const open = Boolean(anchorEl);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMouse = () => {
    setLook(!look);
    console.log("Look")
  }

  const handleMouses = () => {
    setLooks(!looks);
    console.log("Looks")
  }

  const handleMoused = () => {
    setLooked(!looked);
    console.log("Looked")
  }
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Paper className={classes.paper} >
            <Toolbar>
              {/* {auth &&(
            <div> */}
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                // aria-label="menu"
                aria-controls="menu-appbar"
                // onClick={handleMenu}
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <div className="Responsive-Icon"> <MenuIcon /></div>
              </IconButton>
              {/* <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
             <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>
            </Menu> */}
              {/* </div>
          )} */}

              {/* {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="default"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>
                  
              </Menu>
            </div>
          )} */}




              <Typography variant="h6" component="div" style={{ flexGrow: '1' }} >
                <NavLink to="/" className="Bticks">BTicks</NavLink>
              </Typography>

              <Typography variant="h6" component="div" style={{ flexGrow: "1", margin: "auto", padding: "auto" }} align="center" className="HeaderResponsive" >
                <Container maxWidth="md" >
                  <Grid container justifyContent="center" alignItems="center" spacing={0} >
                    <Grid item lg={3} md={3}>
                      <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ? <div className="Consumer-accrodion"><ConsumerAccrodion /></div> : ''
                        }
                      </div>
                    </Grid>

                    <Grid item lg={3} md={3}>
                      <div>
                        <div onMouseEnter={handleMouse} className="HeaderItem-1">Paytm for Business</div>
                        {
                          look ? <div className="Consumer-accrodion"><BusinessAccordion /></div> : ''
                        }
                      </div>
                    </Grid>

                    <Grid item lg={3} md={3}>
                      <div>
                        <div onMouseEnter={handleMoused} className="HeaderItem-1">Company</div>
                        {
                          looked ? <div className="Consumer-accrodion"><CompanyAccordion /></div> : ''
                        }
                      </div>
                    </Grid>

                    <Grid item lg={3} md={3}>
                      <div>
                        <div className="HeaderItem-1">
                          Carrer
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </Typography>
              {/* {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="default"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                <div>
                        <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                        {
                          looks ?  <div className="Consumer-accrodion"><ConsumerAccrodion/></div>:''
                        }
                    </div>
                  </MenuItem>
                  
              </Menu>
            </div>
          )} */}



              <FormGroup className="formGroup-responsive">
                <FormControlLabel
                  control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                  label=
                  {auth ?
                    <NavLink
                      to='../../Logout/Logout'
                      activeClassName
                      className="navLink">
                      Logout
                    </NavLink>
                    :
                    <NavLink to="../../Login/Login"
                      activeClassName
                      className="navLink">
                      Login
                    </NavLink>
                  }
                />
              </FormGroup>
            </Toolbar>
          </Paper>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              <div>
                <div onMouseEnter={handleMouses} className="HeaderItem-1">Paytm for Consumer</div>
                {
                  looks ? <div className="Consumer-accrodion"><ConsumerAccrodion /></div> : ''
                }
              </div>,

              <div>
                <div onMouseEnter={handleMouse} className="HeaderItem-1">Paytm for Business</div>
                {
                  look ? <div className="Consumer-accrodion"><BusinessAccordion /></div> : ''
                }
              </div>,

              <div>
                <div onMouseEnter={handleMoused} className="HeaderItem-1">Company</div>
                {
                  looked ? <div className="Consumer-accrodion"><CompanyAccordion /></div> : ''
                }
              </div>,

              <div>
                <div className="HeaderItem-1">
                  Carrer
                </div>
              </div>
            ].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
}
