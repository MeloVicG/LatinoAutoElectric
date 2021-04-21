import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import styles from '../styles/AdminLogin.module.scss';


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
                    navigate("/dashboard");
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
                <div className={styles.login}>
                    <div className={styles.loginBlock}>
                        <label>Username: </label>
                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className={styles.loginBlock}>
                        <label>Password: </label>
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <input id={styles.loginButton} type="submit" value="Login" />
                </div>
            </form>
            <br/>
            <h4>to view admin page</h4>
            <p>username : guest</p>
            <p>password : guest</p>
        </div>

    )
}

export default AdminLogin;