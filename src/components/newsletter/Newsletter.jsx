import './newsletter.css';

import SendIcon from '@mui/icons-material/Send';



function Newsletter() {
    return (
        <div className='newsletter'>
            <h1 >Newletters</h1>
            <div className='description'>
                Get timely updates from your favorite products.
            </div>
            <div className='inputContainer'>
                <input placeholder='Email' name="email" type="email"></input>
                <button><SendIcon /></button>
            </div>
        </div>
    )
}
export default Newsletter;