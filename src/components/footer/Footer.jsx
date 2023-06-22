import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
function Footer() {
    return <div className='footer'>
        <div className='left'>
            <h1>ECOMMERCE.</h1>
            <p>  There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don’t look even slightly believable.</p>
            <div className='socialContainer'>
                <div className='socialIcon' style={{ backgroundColor: '#3B5999' }}><FacebookIcon /></div>
                <div className='socialIcon' style={{ backgroundColor: '#E4405F' }}><InstagramIcon /></div>
                <div className='socialIcon' style={{ backgroundColor: '#55ACEE' }}><PinterestIcon /></div>
                <div className='socialIcon' style={{ backgroundColor: '#E60023' }}><TwitterIcon /></div>
            </div>
        </div>
        <div className='centre'>
            <h3> Useful Links</h3>
            <ul className='list'>
                <li className='listItem'>Home</li>
                <li className='listItem'>Cart</li>
                <li className='listItem'>Man fasion</li>
                <li className='listItem'>Woman fashion</li>
                <li className='listItem'>Accessories</li>
                <li className='listItem'>My Account</li>
                <li className='listItem'>Order Tracking</li>
                <li className='listItem'>Wihlist</li>
                <li className='listItem'>Wihshlist</li>
                <li className='listItem'>Terms</li>

            </ul>

        </div>
        <div className='right'>
            <h3>Contact</h3>
            <div className='contactItem'>
                <LocationOnIcon style={{ marginRight: "10px" }} /> 1st street, Gulzar street, Banana Republic.
            </div>
            <div className='contactItem'>
                <LocalPhoneIcon style={{ marginRight: "10px" }} /> +92-900-78601
            </div>
            <div className='contactItem'>
                <MailIcon style={{ marginRight: "10px" }} /> ali@test.com
            </div>
            <img src="https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png" alt="" />
        </div>
    </div >
}

export default Footer;