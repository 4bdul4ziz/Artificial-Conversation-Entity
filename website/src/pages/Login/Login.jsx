import React from "react";
import { SignIn,SignUp } from "../../container";
import './Login.scss'

const Login=()=>{
    // const SignIn=()=>('WOrk nigga')
    // const SignUp=()=>('PLS WORK BRAH')

    return(
    <div className="login">
        <SignIn/>
        <SignUp/>
    </div>

    )
}

export default Login;