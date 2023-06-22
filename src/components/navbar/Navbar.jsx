import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <span className="language">EN</span>
                    <div className="searchContainer">
                        <input
                            name="searchInput"
                            type="text"
                            placeholder="search"
                        />
                        <SearchIcon style={{ fontSize: 16, color: "gray" }} />
                    </div>

                </div>
                <div className="centre"> <h1>Ecommerce.</h1></div>
                <div className="right">
                    <div className="menuItem">
                        REGISTER
                    </div>
                    <div className="menuItem">
                        SIGN IN
                    </div>
                    <div className="menuItem">
                        <div className="badge">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar