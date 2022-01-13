import React from "react";
import { SignIn } from "../../container";
import './Login.scss'
// import { SignIn } from "../../container";

const Login=()=>{
    // const SignIn=()=>('WOrk nigga')
    const SignUp=()=>('PLS WORK BRAH')

    return(
    <div className="login">
        <SignIn/>
        <SignUp/>
    </div>

    )
}

export default Login;