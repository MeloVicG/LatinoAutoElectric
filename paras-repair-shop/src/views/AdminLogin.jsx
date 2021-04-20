import React, { useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const AdminLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/auth/signin", {
            username,
            password
        })
            .then(res => {
                if (res.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Admin Login</h1>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                <label>Password</label>
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} />
                <input type="submit" value="Login" />
            </form>
        </div>

    )
}

export default AdminLogin;