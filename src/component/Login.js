import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Login.css";
import auth from "../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                history.push("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push("/");
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                    alt="logo"
                />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail </h5>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter Email"
                    />

                    <h5>Password</h5>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Enter password"
                    />

                    <button onClick={signIn} className="login_signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of
                    Use &amp; Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice
                </p>

                <button onClick={register} className="login_registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
