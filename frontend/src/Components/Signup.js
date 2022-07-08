import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

const Signup=()=>{
    const [name,setName] = useState("");
    const [password,setPassword]= useState("");
    const [email,setemail] = useState("");
    const navigate = useNavigate();
    
    
    useEffect(()=>{
        const auth = localStorage.getItem("users");
        if(auth){
            navigate("/");
        }
    })

    
    
    const collectData =async ()=>{
        console.warn(name,email,password);
        //API integration fetch method
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json();
        console.warn(result);
        localStorage.setItem("users",JSON.stringify(result));
        if(result){
            navigate('/');
        }
    }

    return(
        // <div className='Signup'>
        //     <h1>Register</h1>
        //     <input className='inputBox' type = "text" value = {name} onChange = {(e)=>setName(e.target.value)} placeholder='Enter your name'/>
        //     <input className='inputBox' type = "email"
        //     value= {email} onChange = {(e)=> setemail(e.target.value)} placeholder='Enter Email'/>
        //     <input className='inputBox' type = "password" 
        //     value = {password} onChange = {(e)=> setPassword(e.target.value)} placeholder='Enter Password'/>
        //     {/* <input className='inputBox' type = "password" placeholder='Confirm Password'/> */}
        //     <button onClick={collectData} className='button-69' type = "button">Sign Up</button>
        // </div>


<div className="container">
        <div className="screen">
            <div className="screen__content">
                <form className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="text" className="login__input" value = {name} onChange = {(e)=>setName(e.target.value)} placeholder='Enter your name'/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" 
                        value= {email} onChange = {(e)=> setemail(e.target.value)} placeholder='Enter Email'/>
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="password" className="login__input"
                        value = {password} onChange = {(e)=> setPassword(e.target.value)} placeholder='Enter Password'/>
                    </div>
                    <button onClick={collectData} className="button login__submit">
                        <span className="button__text">Sign Up</span>
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
export default Signup;