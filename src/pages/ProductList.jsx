import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";
import Categories from "../components/categories/Categories";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import './productList.css'
import Products from "../components/products/Products";

function ProductList() {

    return (
        <div className="productList">
            <Announcement />
            <Navbar />
            <h1> Our products</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span>Filter by</span>
                    <select>
                        <option disabled selected>
                            Color
                        </option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                    <select>
                        <option disabled selected>
                            Size
                        </option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select></div>
                <div className="filter"> <span>Sort by</span>
                    <select>
                        <option selected>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select></div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList;