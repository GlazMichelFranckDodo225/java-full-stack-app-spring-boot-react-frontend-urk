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

    function handleUsernameChange(event) {
        // console.log(event);
        // console.log(event.target.value);
        setUsername(event.target.value);
    }
    
    function handlePasswordChange(event) {
        console.log(event);
        console.log(event.target.value);
        setPassword(event.target.value);
    }

    return (
        <div className="login">
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
                    <button type="button" name="login">Login</button>
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