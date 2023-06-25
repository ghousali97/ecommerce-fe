import { createRef } from 'react';
import './announcment.css';
import CloseIcon from '@mui/icons-material/Close';
function Announcement() {

    const closeButton = createRef();
    function closeAnnouncement() {
        closeButton.current.style.display = 'none';
    }
    return (<div className="announcment" ref={closeButton}>
        <span> Super Deal! Free Shipping on Orders Over $50</span>  <CloseIcon fontSize='small' onClick={closeAnnouncement} />
    </div>)
}

export default Announcement;