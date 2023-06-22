import './products.css'
import { popularProducts } from '../../data';
import ProductItem from '../productitems/ProductItem';
function Products() {

    return (<div className='products'>
        {
            popularProducts.map((product) => {
                return <ProductItem product={product} />
            })
        }
    </div>)
}

export default Products;