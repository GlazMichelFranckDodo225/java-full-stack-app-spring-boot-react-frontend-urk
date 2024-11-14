import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="todoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome' element={<WelcomeComponent />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("johndoe");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();

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
            navigate('/welcome')
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
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
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