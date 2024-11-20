import { useParams, Link} from 'react-router-dom';

function WelcomeComponent() {
    const { username } = useParams();

    console.log(username);

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username} !</h1>
            <div>
                Manage Your Todo - <Link to="/todos">Go Here.</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent;