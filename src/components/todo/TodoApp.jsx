export default function TodoApp() {
    return (
        <div className="todoApp">
            Todo Management Application
            <LoginComponent />
            <WelcomeComponent />
        </div>
    )
}

function LoginComponent() {
    return (
        <div className="login">
            Login Component
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