import { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="todoApp">
            Todo Management Application
            <LoginComponent />
            {/* <WelcomeComponent /> */}
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("johndoe");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    function handleUsernameChange(event) {
        // console.log(event);
        // console.log(event.target.value); 
        setUsername(event.target.value);
    }
    
    function handlePasswordChange(event) {
        // console.log(event);
        // console.log(event.target.value);
        setPassword(event.target.value);
    }

    function handleSubmit() {
        // console.log(username);
        // console.log(password);
        if (username === 'johndoe' && password === 'dummy') {
            console.log("Succes"); 
            setShowSuccessMessage(true);
            setShowErrorMessage(false);         
        } else {
            console.log("Failed"); 
            setShowSuccessMessage(false);
            setShowErrorMessage(true);             
        }
    }

    return (
        <div className="login">
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully.</div>}
            {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please, Check your Credentials.</div>}
            <div className="loginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password}onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="welcome">
            Welcome Component
        </div>
    )
}