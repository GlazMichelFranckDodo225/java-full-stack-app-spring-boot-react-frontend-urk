import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function WelcomeComponent() {
    const { username } = useParams();

    function callHelloWorldRestApi() {
        console.log("Called !");

        axios.get('http://localhost:8080/hello-world')
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("Cleanup !"));       
    }
    
    function successfulResponse(response) {
        console.log(response);      
    }
    
    function errorResponse(error) {
        console.log(error);        
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username} !</h1>
            <div>
                Manage Your Todo - <Link to="/todos">Go Here.</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello World REST API
                </button>
            </div>
        </div>
    )
}

export default WelcomeComponent;