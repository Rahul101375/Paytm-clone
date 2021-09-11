import React,{createContext} from 'react'
import Login from '../Login/Login';

const localData = createContext();

const localStorageData=()=>{
    let list = localStorage.getItem('userDetails');
    if(list){
        return JSON.parse(localStorage.getItem('userDetails'));
    }
    else{
        return [];
    }
}

function ContextsApi(){
    return(
        <>
        <localData.Provider value={localStorageData}>
            <Login/>
        </localData.Provider>
        </>
    )
}

export default ContextsApi
export {localData}