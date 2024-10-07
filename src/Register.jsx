import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        name: '',
        phone: '',
        age: '',
        bloodGroup: '',
        username: '',
        password: '',
        gender: '',
        area: '',
        state: '',
        pincode: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        const inputField = e.target;
        inputField.style.borderColor = value ? '#28a745' : '#dc3545';
        inputField.style.boxShadow = value ? '0 0 5px rgba(40, 167, 69, 0.5)' : 'none';
    };

    const submit = (e) => {
        e.preventDefault();

        axios.post('https://project-e481d-default-rtdb.firebaseio.com/register.json', data) 
            .then((response) => {
                console.log('Registration successful', response);
                navigate('/home');  
            })
            .catch((error) => {
                console.error('Error registering', error);
            });

        console.log(data);  
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100 px-4 py-4 mt-4">
                <div className="card p-4 bg-light animated-card w-100" style={{ maxWidth: '600px' }}>
                    <h3 className="text-center text-primary">
                        <em><u>Registration</u></em>
                    </h3>
                    <form onSubmit={submit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your Mobile No"
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="age">Age:</label>
                                <input
                                    type="number"
                                    name="age"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your Age"
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="bloodGroup">Blood Group:</label>
                                <select
                                    name="bloodGroup"
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
                                    <option value="">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your Username"
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your Password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="gender">Gender:</label>
                                <select
                                    name="gender"
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="area">Area:</label>
                                <input
                                    type="text"
                                    name="area"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your Area"
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="state">State:</label>
                                <select
                                    name="state"
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                >
                                    <option value="">Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="pincode">Pincode:</label>
                                <input
                                    type="number"
                                    name="pincode"
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your Pincode"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
