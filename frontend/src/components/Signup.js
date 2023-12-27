import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import "./Style/login.css"
const Signup = () => {
  const [id,setId]=useState({"user":"","password":"","email":"",'cnf':""});
  
  const handleChange=(e)=>{
    let val=e.target.value;
    let na=e.target.name;
    setId((prev)=>{return({...prev,[na]:val})}
    )
}

const check=()=>{
 console.log(id)
 //save to db
    
}
  return (
    <>
      <div class="wrapper login">
    <div class="container">
        <div class="col-left">
            <div class="login-text">
                <h2>Welcome!</h2>
              <p>Sign Up Here</p>
                
            </div>
        </div>

        <div class="col-right">
            <div class="login-form">
                <h2>Create your account</h2>
                <form action="">
                    <p>
                        <label>Enter Email address<span>*</span></label>
                        <input type="text" name='email' onChange={handleChange} placeholder="Username or Email" required/>
                    </p>
                    <p>
                        <label>Enter  Username<span>*</span></label>
                        <input type="text" name='user' onChange={handleChange} placeholder="Username or Email" required/>
                    </p>
                    <p>
                        <label>Password<span>*</span></label>
                        <input type="password" name='password' onChange={handleChange} placeholder="Password" required/>
                    </p>
                    <p>
                        <label>Confirm Password<span>*</span></label>
                        <input type="password" name='cnf' onChange={handleChange} placeholder="Password" required/>
                    </p>
                    <p>
                        <input type="button" onClick={check} value="Register"/>
                    </p>
                    <p>
                <Link to="/login">Go to Login</Link>

                    </p>

                </form>
            </div>
        </div>

    </div>
</div>
    </>
  )
}

export default Signup