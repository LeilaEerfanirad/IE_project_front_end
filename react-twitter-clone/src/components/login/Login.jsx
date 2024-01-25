import React, { useState } from 'react';
import './Login.scss'
const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function handleSubmit () {
        // e.preventDefault();
        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend (e.g., set user authentication state)
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    };

    return (
        <div className="loginContainer">
            <h2>Login</h2>
            <form >
                <label htmlFor="username" ></label>
                <input
                    placeholder='UserName'
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password"></label>
                <input
                    placeholder='Password'
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;
