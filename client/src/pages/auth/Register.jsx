import React, { useState } from 'react'
import {Link} from "react-router-dom"
import CommonForm from '../../components/common/form';
import { registerFormControls } from '../../config';
const initialState={
  name:"",
  phone:"",
  email:"",
  password:""
}

const Register = () => {
  const [formData,setFormData]=useState(initialState);
  function onSubmit(e){
    e.preventDefault();
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create New Account</h1>
          <p className='mt-2'>Already have an account
          <Link to='/auth/login' className='ml-2 font-medium text-primary hover:underline'>Login</Link>
          </p>
        </div>
        <CommonForm
        formControls={registerFormControls}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Sign up"}
        onSubmit={onSubmit}
        />
    </div>
  )
}

export default Register