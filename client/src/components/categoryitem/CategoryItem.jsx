import { Navigate } from 'react-router-dom';
import './categoryitem.css'

function CategoryItem({ category }) {

    return (<div className='categoryitem'>
        <Navigate to={'/products/' + category.cat}>
            <img src={category.img} alt="" />
            <div className='infoContainer'>
                <h1>{category.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </Navigate>
    </div>);
}

export default CategoryItem;