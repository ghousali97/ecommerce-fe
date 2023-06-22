import './products.css'
import { popularProducts } from '../../data';
import ProductItem from '../productitems/ProductItem';
function Products() {

    return (
        <div className='wrapper'>
            <h1>Our Products</h1>
            <div className='products'>
                {
                    popularProducts.map((product) => {
                        return <ProductItem product={product} />
                    })
                }
            </div>
        </div>)
}

export default Products;