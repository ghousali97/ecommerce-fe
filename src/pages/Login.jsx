import { Link } from 'react-router-dom';
import './login.css';

function Login() {

    return (<div className="login">
        <div className='formContainer'>
            <h1>
                SIGN IN
            </h1>
            <form>
                <input placeholder="username" name="uname" type="text" />
                <input placeholder="password" name="password" type="password" />
                <button>Log in</button>
                <Link> Forgot password?</Link>
                <Link to="/register">Create a new account</Link>

            </form>

        </div>

    </div>)
}

export default Login;