import React, { createRef } from "react";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './navbar.css'

function Navbar() {

    const searchBar = createRef();
    const navBar = createRef();

    function closeSearch() {
        searchBar.current.style.display = 'none';
        navBar.current.style.display = 'flex';
    }
    function openSearch() {

        searchBar.current.style.display = 'flex';
        navBar.current.style.display = 'none';
    }
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
            <div className="container-mobile">

                <div className="topContainer" ref={navBar}>
                    <div className="left">
                        <SearchIcon onClick={openSearch} style={{ fontSize: 18, color: "gray" }} />
                    </div>
                    <div className="center"> <h1>Ecommerce.</h1></div>
                    <div className="right">
                        <div className="menuItem">
                            REGISTER
                        </div>
                        <div className="menuItem">
                            SIGN IN
                        </div>
                        <div className="menuItem">
                            <div className="badge">
                                <Badge badgeContent={4} color="primary" style={{ fontSize: 160 }}>
                                    <ShoppingCartOutlinedIcon style={{ fontSize: 18 }} />
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottomContainer" ref={searchBar}>
                    <div className="searchContainer" >
                        <input
                            name="searchInput"
                            type="text"
                            placeholder="Search"
                        />
                        <CloseSharpIcon onClick={closeSearch} style={{ fontSize: 16, color: "gray" }} />

                    </div>

                </div>

            </div>
        </div >
    )
}


export default Navbar