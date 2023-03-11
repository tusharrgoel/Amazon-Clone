import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  //console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://mui.com/static/branding/companies/amazon-dark.svg"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon " />
      </div>

      <div className="header_nav">
        <Link className="header_link" to="/login">
          <div className="header_option">
            <span className="header_optionLineOne"> Heyy Tushar</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link className="header_link" to="/login">
          <div className="header_option">
            <span className="header_optionLineOne"> Return</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <span className="header_optionLineTwo header_BasketCount">
              {basket?.length}
            </span>
            <ShoppingBasketIcon />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
