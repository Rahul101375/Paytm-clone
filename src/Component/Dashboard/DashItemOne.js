import React from 'react'
import {Box,Grid,Paper,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MobileLogo from '../../Assests/Logo/paytmMobile.webp'
import PaytmLogo from '../../Assests/Logo/paytmLogo.png'
import styled from 'styled-components';
import {Button} from '@material-ui/core'
import AppleIcon from '@material-ui/icons/Apple';
import PlayStore from '../../Assests/Logo/playstore.png'


const Thing = styled.div`
 display:block;
 margin:15px 0px;
 padding:10px 0px;
`
const ThingLeft = styled.div`
display:block;
width:80%;
margin:60px auto;
padding:10px;
`
const LeftItem = styled.div`
  color:#000000;
  fontSize:18px;
  fontWeight:bold;
`
const LeftItemTwo = styled.h1`
  color:#000000;
`
const Buttons =styled.div`
display:flex;
justifyContext:space-between;
alignItems:center;
padding:auto 20px;
`
const ButtonSet=styled.div`
  padding:0 5px;
`
const ButtonSets=styled.div`
  padding:0px 5px;
  margin:4px 0;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function DashBoardItemOne(){
    const classes=useStyles()
    return(
        <>
        <div className={classes.root}>
          <Box>
              <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item lg={7}>
                        <ThingLeft>
                        <Typography align="left" variant="h2">
                           <img src={PaytmLogo} alt="Paytm-Logo" width="120px" />
                       </Typography>

                       <Typography align="left">
                           <LeftItemTwo >India's Most-loved <br/>Payments App</LeftItemTwo>
                           <LeftItem >Recharge & pay bills, book flights & movie tickets, 
                               <br/>open a savings account, invest in stocks & mutual funds, 
                               <br/>and do a lot more.
                               </LeftItem>
                       </Typography>
                      
                      <Typography align="left" variant="h2">
                       <Button 
                       style={{background:"#000000",color:"#f5f5f5",borderRadius:"30px",padding:"15px"}}
                       >
                           <Buttons >
                           <ButtonSet>Download Paytm App</ButtonSet>
                           <ButtonSet><AppleIcon/></ButtonSet>
                           <ButtonSets><img src={PlayStore} alt="PlayStore" width="20px" height="15px"/>
                           </ButtonSets>
                           </Buttons>
                       </Button>
                       </Typography>
                       </ThingLeft>
                    </Grid>

                    <Grid item lg={5}>
                        <Thing>
                            <img src={MobileLogo} alt="Mobile-Logo" width="500px" />
                        </Thing>
                    </Grid>
                  </Grid>
              </Paper>
          </Box>
          </div>
        </>
    )
}