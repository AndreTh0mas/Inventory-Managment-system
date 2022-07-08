import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
const Login = ()=>{
    const [email,setemail] = React.useState('');
    const [password,setpassword] = React.useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("users");
        if(auth){
            navigate("/");
        }
    })
    const handlelogin = async ()=>{
        console.warn("email","password",email,password);
        let result = await fetch('http://localhost:5000/login',{
            method : 'post',
            body: JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name){
            localStorage.setItem("users", JSON.stringify(result));
            navigate("/");
        }
        else{
            alert("Please enter correct Email and password");
        }
    }
    return(
        // <div className='login'>
        //     <input type = "text" className='inputBox' placeholder='Enter your Email' 
        //     onChange={(e)=>setemail(e.target.value) } value = {email}/>
        //     <input type = "password" className='inputBox' placeholder='Enter Password' 
        //     onChange={(e)=>setpassword(e.target.value)} value ={password}/>
        //     <button onClick={handlelogin} className='appButton' type = 'button'>Login</button>

        // </div>
        <div className="container">
        <div className="screen">
            <div className="screen__content">
                <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="User name / Email"
                        onChange={(e)=>setemail(e.target.value) } value = {email}/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="password" className="login__input" placeholder="Password"
                        onChange={(e)=>setpassword(e.target.value)} value ={password}/>
                    </div>
                    <button onClick={handlelogin} className="button login__submit">
                        <span className="button__text">Log In Now</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>				
                </form>
                {/* <div className="social-login">
                    <h3>log in via</h3>
                    <div className="social-icons">
                        <a href="#" className="social-login__icon fab fa-instagram"></a>
                        <a href="#" className="social-login__icon fab fa-facebook"></a>
                        <a href="#" className="social-login__icon fab fa-twitter"></a>
                    </div>
                </div> */}
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    )
}

export default Login;