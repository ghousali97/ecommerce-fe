import './products.css'
import ProductItem from '../productitems/ProductItem';
import axios from 'axios'
import { useEffect, useState } from 'react';


function Products({ cat, filters, sort }) {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);



    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat ?
                        'api/product/?category=' + cat :
                        'api/product');
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getProducts();
    }, [cat]);

    useEffect(() => {
        function filterHandler(product) {

            if ((filters.size ? product.size.includes(filters.size) : true) && (filters.color ? product.color.includes(filters.color) : true)) return product;


        }
        cat && setFilteredProducts(
            products.filter(filterHandler)
        );

    }, [products, cat, filters]);


    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);


    return (
        <div className='wrapper'>
            <h1> {cat ? cat : 'Our Products'}</h1>
            <div className='products'>
                {cat ?
                    filteredProducts.map((product) => {
                        return <ProductItem product={product} />
                    }) : products.map((product) => {
                        return <ProductItem product={product} />
                    })
                }
            </div>
        </div>)
}

export default Products;