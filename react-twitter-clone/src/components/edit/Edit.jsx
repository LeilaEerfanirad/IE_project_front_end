import React , { useState } from 'react'

function Edit() {
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
        console.log('here')
        fetch(
            'http://localhost:3000/login?username=${formData.username}&password=${formData.password}'
            , {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        
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

export default Edit