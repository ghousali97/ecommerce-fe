import './productitem.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';



function ProductItem({ product }) {


    return (<div className='productitem'>
        <div className='circle'></div>
        <img src={product.img} alt="" />
        <div className='infoContainer'>
            <div className='icon'>  <ShoppingCartOutlinedIcon /></div>
            <Link to={'/product/' + product._id}>
                <div className='icon'>
                    <SearchOutlinedIcon />
                </div>
            </Link>

            <div className='icon'><FavoriteBorderOutlinedIcon /></div>
        </div>
    </div>);
}

export default ProductItem;