import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CommonForm from '../../components/common/form';
import { loginFormControls } from '../../config';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/auth-slice';
import { useToast } from '../../hooks/use-toast';

const initialState={
  email:"",
  password:""
}
function Login() {
  const [formData,setFormData]=useState(initialState);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {toast}=useToast();

  function onSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData)).then((res)=>{
      console.log(res);
      
      if (res.payload?.success) {
        toast({
          title:res.payload?.message,
        })
        if (res.payload.user.role==="admin") {
          navigate("/admin/dashboard")
        }else {
          navigate("/shop/home")

        }
      }else{
      toast({
        title:res?.payload?.message,
        variant:"destructive",
      })
      }
    })

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