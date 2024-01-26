import React , { useState } from 'react'
import './edit.scss'
function Edit() {
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
        fetch(
            'http://localhost:3000/edit?username=${formData.username}&firstname=${formData.firstname}&lastname=${formData.lastname}'
            , {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        
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
                <button type="submit">Edit</button>
            </form>
            
        </div>
    );
}

export default Edit