import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/announcement/Announcement";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Newsletter from "../components/newsletter/Newsletter";
import './product.css';

function Product() {
    return (
        <div className="product">
            <Announcement />
            <Navbar />
            <div className="productContainer">
                <div className="imgContainer">
                    <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
                </div>
                <div className="infoContainer">
                    <h1>
                        Denim jumpsuit
                    </h1>
                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</p>
                    <h3>$ 20</h3>
                    <div className="filterContainer">
                        <div className="filter">
                            <span>Color</span>
                            <div className="colorFilter" style={{ backgroundColor: 'red' }}></div>
                            <div className="colorFilter" style={{ backgroundColor: 'blue' }}></div>
                            <div className="colorFilter" style={{ backgroundColor: 'green' }}></div>
                        </div>
                        <div className="filter">
                            <span>Size</span>
                            <select>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className="addContainer">
                        <div className="amountContainer">
                            <Add />
                            <span>1</span>
                            <Remove />
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