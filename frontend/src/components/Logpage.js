import React, { useState,useEffect,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "./Style/login.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Logpage = () => {

    // const {setLoginUser,loginuser}=useContext(contextApp)
    const [id,setId]=useState({"email":"","password":""});
    const [loginData,setLoginData]=useState([]);
    
    const navigate=useNavigate();
    

    const handleChange=(e)=>{
        let val=e.target.value;
        let na=e.target.name;
        setId((prev)=>{return({...prev,[na]:val})}
        )
    }
    const check=()=>{

        try {
            fetch("/api/auth/login",{
                method:"POST",
                body:JSON.stringify(id),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(res=>res.json()).then(rslt=>console.log(rslt))
            toast.success("login succesfully")
            console.log(id)
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
              <Link to="/signup">  <p>Login Here</p></Link>
                
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
                {/* <Link to="/login">Forgot password?</Link> */}

                    </p>

                </form>
            </div>
        </div>

    </div>
</div>
<ToastContainer />
    </>
  )
}

export default Logpage