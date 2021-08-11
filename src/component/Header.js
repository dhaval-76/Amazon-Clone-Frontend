import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import auth from "../firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo border_black"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="header_address border_black">
                <LocationOnOutlinedIcon className="location_logo" />
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>
                    <br />
                    <span className="header_optionLineTwo">
                        Select Your Address
                    </span>
                </div>
            </div>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon fontSize="large" className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div
                        onClick={handleAuthentication}
                        className="header_option border_black"
                    >
                        <span className="header_optionLineOne">
                            Hello, {user ? user.email : "Guest"}
                        </span>
                        <br />
                        <span className="header_optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header_option border_black">
                        <span className="header_optionLineOne">Returns</span>
                        <br />
                        <span className="header_optionLineTwo">
                            &amp; Orders
                        </span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header_optionBasket border_black">
                        <span className="header_optionLine">
                            {basket?.length}
                        </span>
                        <ShoppingCartIcon
                            className="cart_logo"
                            fontSize="large"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
