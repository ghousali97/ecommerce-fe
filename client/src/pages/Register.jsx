import { Link } from 'react-router-dom';
import './register.css';

function Register() {

    return (<div className="register">
        <div className='formContainer'>
            <h1>
                CREATE AN ACCOUNT
            </h1>
            <form>
                <input placeholder="first name" name="fname" type="text" />
                <input placeholder="last name" name="lname" type="text" />
                <input placeholder="username" name="uname" type="text" />
                <input placeholder="email" name="email" type="email" />
                <input placeholder="password" name="password" type="password" />
                <input placeholder="confirm password" name="cpassword" type="password" />
                <button>Sign up</button>

            </form>
            <Link to="/login">Already have an account?</Link>
        </div>

    </div>)
}

export default Register;