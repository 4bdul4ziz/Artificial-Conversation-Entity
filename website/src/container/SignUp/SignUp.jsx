import React from "react";

import { FormInput } from "../../components";
import { CustomButton } from "../../components";

import './SignUp.scss'

const SignUp=()=>{


    const [details,setDetails]=React.useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleChange=(event)=>{
        const {name,value}=event.target
        console.log(name,value)
        setDetails(prev=>({...prev,[name]:value}))
    }
    
    const [displayName,email,password,confirmPassword]=details
    return(
        <div className="sign-up">
            <h2 className="title">I don't have a account</h2>
            <span>Sign up with your Email and Password</span>
            <form className="sign-up-form">
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='E-Mail'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )

}

export default SignUp