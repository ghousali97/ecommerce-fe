
import { Link } from 'react-router-dom';
import './categoryitem.css'

function CategoryItem({ categoryItem }) {

    return (<div className='categoryitem'>
        <Link to={'/products/' + categoryItem.cat}>  <img src={categoryItem.img} alt="" />
            <div className='infoContainer'>
                <h1>{categoryItem.title}</h1>
                <button>SHOP NOW</button>
            </div></Link>


    </div>);
}

export default CategoryItem;