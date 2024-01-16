import React, { useState } from 'react';
import './signup.scss'
const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Send the Signup data to the backend (replace this with your actual API call)
        fetch('register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"></label>
                <input
                    placeholder="Username"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password"></label>
                <input
                    placeholder="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email"></label>
                <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="firstName"></label>
                <input
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="lastName"></label>
                <input
                    placeholder="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
