import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

//incase of selling website create legal document
//disclaimer current not in use of business
const AddAdmin = () => {

    const [admins, setAdmins] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirm, setConfirm] = useState("");
    // const [securityController, setSecurityController] = useState(false);
    const [roles, setRoles] = useState(["admin"]);

    const handleNewAdmin = (e) => {
        e.preventDefault();
        console.log("handle admin part ");
        const newAdmin = {
            firstName,
            lastName,
            email,
            username,
            password,
            // confirm,
            // securityController,
            roles,
        }
        axios.post('http://localhost:8080/api/auth/signup', newAdmin)
        .then(res => {
                navigate('/admin')
                // setAdmins([...admins, res.data])
            })
            .catch(err => {
                console.log(err.response)
                //             const {errors} = err.response.data;
                //             const messages = Object.keys(errors).map(error => errors[error].message);
                //             setErrorMessages(messages);
            })
    }
    // const handleCheckbox = (e) => {
    //     if (securityController === true) {
    //         setSecurityController(false);
    //     } else {
    //         setSecurityController(true);
    //     }
    // }

    return (
        <div>
            <h1>Register New Admin</h1>
            <form onSubmit={handleNewAdmin}>
                <label>First Name</label>
                <input type="text" onChange={(e) => { setFirstName(e.target.value) }} />
                <label>Last Name</label>
                <input type="text" onChange={(e) => { setLastName(e.target.value) }} />
                <label>Email</label>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
                <label>Username</label>
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                <label>Password</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                {/* <label>Confirm Password</label>
                <input type="text" onChange={(e) => { setConfirm(e.target.value) }} /> */}
                {/* <label>Security Controller</label> */}
                {/* <input type="checkbox" value="true" onChange={handleCheckbox} /> */}
                <input type="submit" value="Add Admin" />
            </form>
        </div>

    )
}

export default AddAdmin;