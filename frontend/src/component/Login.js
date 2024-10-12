import React, { useState } from 'react';
import './Login.css'; // يمكنك إضافة CSS هنا لتنسيق الواجهة

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
            <h2>تسجيل الدخول</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">كلمة المرور</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Email or Phone Number"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">تسجيل الدخول</button>
            </form>
        </div>
    );
};

export default Login;
