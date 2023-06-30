import Announcement from "../components/announcement/Announcement";
import Navbar from "../components/navbar/Navbar";

import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import './productList.css'
import Products from "../components/products/Products";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { camelCase, startCase, lowerCase } from 'lodash';

function ProductList() {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("");

    function handleFilters(e) {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: lowerCase(value)
        });
        console.log(filters);

    }

    function handleSort(e) {
        const value = e.target.value;
        setSort(value);
    }

    return (
        <div className="productList">
            <Announcement />
            <Navbar />
            <h1> {cat ? startCase(camelCase(cat)).replace(/ /g, '') : 'Our Products'}</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span>Filter by</span>
                    <select name='color' onChange={handleFilters}>
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
                    <select name='size' onChange={handleFilters}>
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
                    <select onChange={handleSort}>
                        <option value="newest" selected>Newest</option>
                        <option value="ascending">Price (asc)</option>
                        <option value="descending">Price (desc)</option>
                    </select></div>
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default ProductList;