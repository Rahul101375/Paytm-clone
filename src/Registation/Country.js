import React, { useEffect, useState } from 'react'
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';


const BootstrapInput = withStyles((theme) => ({
  root: {
    // 'label + &': {
    //   marginTop: theme.spacing(3),
    // },
  },
  input: {
      width:"340px",
    //   left:"10px",
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // '&:focus': {
    //   borderRadius: 4,
    //   borderColor: '#80bdff',
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    // },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),

  },
}));


function Country(){
    const classes = useStyles();
  const [countryName, setCountryName] = React.useState('');
  const [country,setCountry] = useState([]);

  

  useEffect(()=>{
    axios.get(`https://restcountries.eu/rest/v2`)
    .then(res=>{
      setCountry([res.data])
    })
    .catch(error=>{
      console.log(error)
    })
  },[])

  const handleChange = (event) => {
    setCountryName(event.target.value);
  }
    return(
        <>
             <FormControl className={classes.margin} >
        <Select
          id="demo-customized-select-native"
          // value={age}
          value={countryName}
          onChange={handleChange}
          input={<BootstrapInput />} 
        >
          {country.map((item,index)=>
            (item.map((items,index)=>
            <option key={index} value={items.name}>
              {items.name}
              </option>))
          )}
        </Select>
      </FormControl>
        </>
    )
}

export default Country