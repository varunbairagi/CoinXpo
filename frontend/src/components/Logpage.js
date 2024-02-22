import React, { useState,useEffect,useContext } from 'react'
import { Link,NavLink,useNavigate } from 'react-router-dom';
import "./Style/login.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser,getUser } from '../store/authSlice';
import {setToken} from "../store/authSlice"

const Logpage = () => {

    // const {setLoginUser,loginuser}=useContext(contextApp)
    const [id,setId]=useState({"email":"","password":""});
    const [loginData,setLoginData]=useState([]);
    
    const navigate=useNavigate();
    const user=useSelector(state=>state.authData.user)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        let val=e.target.value;
        let na=e.target.name;
        setId((prev)=>{return({...prev,[na]:val})}
        )
    }

    useEffect(()=>{
        if(user!==undefined){
                toast.success("login successfully")
                callCart()}
                
        },[user])
        
        const callCart=async()=>{
            if(user!==undefined){
            const cart_id=await user.userData._id;
            console.log(user)
        let values=[]
           
        //   let cart_id= '65d2453c3c00abe313c16699';
          try {
            const response=await fetch("/api/user/data",{
              method:"POST",
              headers:{
                "Content-type":"application/json"
            },body:JSON.stringify({values,cart_id})
            })
            console.log(response)
          }
          catch (error) {
            console.log(error);
        }
        navigate("/")
      }
    }

      
        
        
      
    const check=async()=>{

        try {
            const response=await fetch("/api/auth/login",{
                method:"POST",
                body:JSON.stringify(id),
                headers:{
                    "Content-type":"application/json"
                }
            })

            const data=await response.json()
            if(response.status==200){
                // console.log("server",data)

                //store token in local storage for authorise
                dispatch(setToken(data.token))
                dispatch(fetchUser())
                // console.log(res);
                setId({email:"",password:""})
                // toast.success("login succesfully")
            
                // 
                
                
            }
            if(response.status==401){
                console.log("server",data)
                toast.warning("invalid credentials")
            }
        } catch (error) {
            toast.warning(error)
        }
    //   const login=loginData.filter((val)=>val.username===id.user )
    //     if((id.user===login[0].username)&&(id.password===login[0].password)){
    //         navigate("/");
    //         console.log(id.user , loginData.username)
    //     // setLoginUser(login[0])

    //       }
    }

  return (
    <>
        <div class="wrapper login">
    <div class="container">
        <div class="col-left">
            <div class="login-text">
                <h2>Welcome!</h2>
              
              <p>Login Page</p>
            </div>
        </div>

        <div class="col-right">
            <div class="login-form">
                <h2>Login</h2>
                <form action="">
                    <p>
                        <label>Enter Username<span>*</span></label>
                        <input type="text" name='email' onChange={handleChange} placeholder="Enter Email" required/>
                    </p>
                    <p>
                        <label>Enter Password<span>*</span></label>
                        <input type="password" name='password' onChange={handleChange} placeholder="Password" required/>
                    </p>
                    <p>
                        <input type="button" onClick={check} value="Sign In"/>
                    </p>
                    <p>
                <NavLink to="/login">Forgot password?</NavLink>
                <NavLink to="/signup"> <p >!! Register Yourself Here !!</p> </NavLink>

                    </p>

                </form>
            </div>
        </div>

    </div>
</div>
<ToastContainer  />
    </>
  )
}

export default Logpage