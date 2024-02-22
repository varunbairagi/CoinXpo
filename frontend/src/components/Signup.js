import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Style/login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector,useDispatch } from 'react-redux';
import {setToken} from "../store/authSlice"
const Signup = () => {
  const [id, setId] = useState({ username: "", password: "", email: "", cnf: "" });
  const regE = /^[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  const navigate=useNavigate()
  const handleChange = (e) => {
    let val = e.target.value;
    let na = e.target.name;
    
    setId((prev) => {
      return { ...prev, [na]: val };
    });
    // if (!regE.test(id.email)) toast.warning("Please Enter valid Email");
  };
  const dispatch=useDispatch()
  const check =async (e) => {
    e.preventDefault()
    if (!regE.test(id.email)) toast.warning("Enter valid email");
    else if (id.password !== id.cnf)
      toast.warning("Passwords are not matching");
    else {

      try {
        console.log(id);
      const {email,username,password}=id;
      const response=await fetch("/api/auth/reg",{
        method:"POST",
        body:JSON.stringify({email,username,password}),
        headers:{
            "Content-type":"application/json"
        }
        
      });
      const data= await response.json()
      if(response.status==201){
        console.log("server",data)
        //local token
        dispatch(setToken(data.token))
        // localStorage.setItem("token",data.token)
        setId({email:"",password:"",cnf:"",username:""})
        toast.success("Registered Successfully")
        navigate("/")
      }
      if(response.status==400){
        
        console.log("server",data)
        toast.warning("User Already Exist")
      }
      
      } catch (error) {
        console.error(error)
        toast.warning(error)
      }
      
    }
    //save to db
  };
  return (
    <>
      <div className="wrapper login">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Welcome!</h2>
              <p>
                Create your account.
                <br />
                For Free!
              </p>
              <p>Sign Up Here</p>
            </div>
          </div>

          <div className="col-right">
            <div className="login-form">
              <h2>Create your account</h2>
              <form >
                <p>
                  <label>
                    Enter Email address<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="Username or Email"
                    required
                  />
                </p>
                <p>
                  <label>
                    Enter Username<span>*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username or Email"
                    required
                  />
                </p>
                <p>
                  <label>
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </p>
                <p>
                  <label>
                    Confirm Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    name="cnf"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </p>
                <p>
                  <input type="button" onClick={check} value="Register" />
                </p>
                <p>
                  <Link to="/login">Go to Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
