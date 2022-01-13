import React from 'react'
import { FormInput } from '../../components';
import { CustomButton } from '../../components';

import './SignIn.scss'

const SignIn=()=>{
    const [user,setUser]=React.useState({
        email:'',
        password:''
    })

    const handleChange=event=>{
        const {value,name}=event.target;
        // console.log(value,name)
        setUser((prev)=>({...prev,[name]:value}))
    }
    const {email,password}=user

    return(
        <div className="sign-in">
            <h2>I already have account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput
                name='email' 
                type='email' 
                value={email} 
                handleChange={handleChange}
                required
                label='email'
                />
                <FormInput
                name='password' 
                type='password' 
                value={password} 
                handleChange={handleChange}
                label='password'
                required
                />
                <div className="buttons">
                    <CustomButton type="submit" >Sign In</CustomButton>
                    <CustomButton type='button' isGoogleSignIn>{' '}Sign In With Google{' '}</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;