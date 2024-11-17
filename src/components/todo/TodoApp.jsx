import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './TodoApp.css';

export default function TodoApp() {
    return (
        <div className="todoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
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
            navigate(`/welcome/${username}`)
        } else {
            console.log("Failed");
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }

    return (
        <div className="login">
            <h1>Time to Login !</h1>
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
    const { username } = useParams();

    console.log(username);

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username} !</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard !</h1>
            <div>Apologies for the 404. Reach out to our Team at ABC-DEF-GHIJ</div>
        </div>
    )
}

function ListTodosComponent() {
    const todos = [
        { id: 1, description: "Learn AWS" },
        { id: 2, description: "Learn Full Stack Dev" },
        { id: 3, description: "Learn DevOps" }
    ];

    return (
        <div className="ListTodosComponent">
            <h1>Things You Want to Do !</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}