import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const AddAdmin = () => {

    const [admins, setAdmins] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [securityController, setSecurityController] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:8080/api/admin/")
            .then(res => {
                let allAdmins = res.data;
                setAdmins(allAdmins);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


    const handleNewAdmin = (e) => {
        e.preventDefault();
        const newAdmin = {
            firstName,
            lastName,
            username,
            password,
            confirm,
            securityController,
        }
        axios.post('http://localhost:8080/api/admin/register', newContact)
            .then(res => {
                console.log("axios.post Response: ", res);
                setAdmins([...admins, res.data])
            })
            .catch(err => {
                console.log(err.response)
                //             const {errors} = err.response.data;
                //             const messages = Object.keys(errors).map(error => errors[error].message);
                //             setErrorMessages(messages);
            })
    }
    const handleCheckbox = (e) => {
        if (securityController === true) {
            setSecurityController(false);
        } else {
            setSecurityController(true);
        }
    }

    return (
        <div>
            <h1>Register New Admin</h1>
            <form onSubmit={handleNewAdmin}>
                <label>First Name</label>
                <input type="text" onChange={(e) => { setFirstName(e.target.value) }} />
                <label>Last Name</label>
                <input type="text" onChange={(e) => { setLastName(e.target.value) }} />
                <label>Username</label>
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                <label>Password</label>
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
                <label>Confirm Password</label>
                <input type="text" onChange={(e) => { setConfirm(e.target.value) }} />
                <label>Security Controller</label>
                <input type="checkbox" value="true" onChange={handleCheckbox} />
                <input type="submit" value="Add Admin" />
            </form>
        </div>

    )
}

export default AddAdmin;