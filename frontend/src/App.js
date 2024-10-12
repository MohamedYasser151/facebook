import React, { useState } from 'react';
import './App.css'
import img from './communication.png'
import img1 from './meta.png'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // هنا يمكنك إضافة منطق تسجيل الدخول
        console.log('تسجيل الدخول:', { email, password });
    };

    return (
      <div className="login-container">
        <small style={{fontSize:"13px",marginTop:"15px"}}>English (UK)</small>
      <img src={img}/>
      <form onSubmit={handleLogin} className='form'>
          
         
          <div className="input-group">
              
              <input
                  type="email"
                  id="email"
                  placeholder="Mobile number or email address"

                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
          </div>
          <div className="input-group">
              
              <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
