import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CommonForm from '../../components/common/form';
import { loginFormControls } from '../../config';
const initialState={
  email:"",
  password:""
}
function Login() {
  const [formData,setFormData]=useState(initialState);
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Login</h1>
        <p className='mt-2'>If not have an account</p><Link to='/auth/register' className='ml-2 text-primary hover:underline font-medium' >Register</Link>
      </div>
      <CommonForm
      setFormData={setFormData}
      formData={formData}
      onSubmit={onSubmit}
      buttonText={"Sign in"}
      formControls={loginFormControls}
      />
    </div>
  )
}

export default Login