import React, { useState } from 'react';
import './signup.scss'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        firstname: '',
        lastname: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit2 = async () => {
        navigate('/login');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const c = "";
        fetch(
            `http://localhost:3000/register?username=${formData.username}&password=${formData.password}&email=${formData.email}&firstname=${formData.firstName}&lastname=${formData.lastName}`
            , {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            c = data;
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log(c);
        localStorage.setItem('user', JSON.stringify(formData));
        localStorage.setItem('isLogedin', true);
        navigate('/profile');
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {/* <label htmlFor="username"></label> */}
                <input
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                {/* <label htmlFor="password"></label> */}
                <input
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {/* <label htmlFor="email"></label> */}
                <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                {/* <label htmlFor="firstName"></label> */}
                <input
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                {/* <label htmlFor="lastName"></label> */}
                <input
                    placeholder="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <button type="submit" onClick={handleSubmit}>Sign Up</button>
                <button type="submit" onClick={handleSubmit2}>Log in</button>
            </form>
        </div>
    );
}

export default Signup;
