import React, { useState } from 'react';
// import Login from './Login'

function LoginValidation(props){
    const [check,setCheck]=useState(false);
    const {email,password} = props.Login


   return(
          <>
          {
              console.log(email,password)
          }
          </>
   )

}
export default LoginValidation