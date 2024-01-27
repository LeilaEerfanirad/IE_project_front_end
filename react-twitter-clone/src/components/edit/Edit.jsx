import React , { useState } from 'react'
import './edit.scss'
import { useNavigate } from 'react-router-dom';
function Edit() {
    let user = JSON.parse(localStorage.getItem('user')) || [];

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
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

    function handleSubmit () {
        
        console.log('here')
        const c = "aa";
        fetch(
            `http://localhost:3000/edit?email=${user.email}username=${formData.username}&firstname=${formData.firstname}&lastname=${formData.lastname}`
            , {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            c = data
            // console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log(c.user.followings);
        localStorage.setItem('user', JSON.stringify(c.user));

        navigate('/profile');
    };

    return (
        <div className='editContainer'>
            <h2>Edit</h2>
            <form>
                
                <input
                placeholder='Username'
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                required
                />
                <input
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder='Last Name'
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <button type="submit" onClick={handleSubmit}>Edit</button>
            </form>
            
        </div>
    );
}

export default Edit