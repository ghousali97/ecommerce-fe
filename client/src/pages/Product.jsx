import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import './product.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { upperCase } from 'lodash';
import axios from "axios";





function Product() {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        console.log('use effect called');
        const getProduct = async () => {
            try {
                const res = await axios.get('/api/product/' + productId);
                console.log('Response from axios');
                console.log(res.data);
                setProduct(res.data);
            } catch (err) {
                if (err.response.status === 404) {
                    console.log('Not found');
                }
                else {
                    console.log(err.response);
                }

            }

        }

        getProduct();
    }, [productId]);


    function handleQuantity(type) {
        if (type === 'increase') {
            setQuantity(quantity + 1);
        } else {
            quantity > 1 && setQuantity(quantity - 1);
        }
    }
    return (
        <div className="product">
            <Announcement />
            <Navbar />

            <div className="productContainer">
                <div className="imgContainer">
                    <img src={product.img} alt="" />
                </div>
                <div className="infoContainer">
                    <h1>
                        {product.title}
                    </h1>
                    <p>  {product.desc}</p>
                    <h3>$ {product.price}</h3>
                    <div className="filterContainer">
                        <div className="filter">
                            <span>Color</span>
                            {product.color && product.color.map((color) => {
                                return <div className="colorFilter" style={{ backgroundColor: color }}></div>
                            })}



                        </div>
                        <div className="filter">
                            <span>Size</span>
                            <select>
                                {product.size && product.size.map((size) => {
                                    return <option>{upperCase(size)}</option>
                                })}


                            </select>
                        </div>
                    </div>
                    <div className="addContainer">
                        <div className="amountContainer">
                            <Add onClick={() => {
                                handleQuantity("increase");
                            }} />
                            <span>{quantity}</span>
                            <Remove onClick={() => {
                                handleQuantity("decrease");
                            }} />
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>

            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}
export default Product;