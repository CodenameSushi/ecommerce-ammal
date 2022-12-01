import React from "react";
import { HeaderContainer } from "./Header.styled";
import searchIcon from "../../assets/search.svg";
import walletIcon from "../../assets/wallet.svg";
import cartIcon from "../../assets/cart.svg";


const Header = (props) => {
  const { 
    goToCartScreen,
    goToProductsScreen,
    filterText,
    onChangeFilterText,
    itemsInCart
  } = props;

  return (
    <HeaderContainer>
      <a>BlueShop</a>

      <div>
        <input 
        type="search" 
        placeholder="Search"
        value={filterText} 
        onChange={onChangeFilterText}
        />
        <button>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>

      <div className="button-group">
        <button onClick={goToProductsScreen}>
          <img src={walletIcon} alt="product-icon" />
        </button>

        <button className="cart-btn" onClick={goToCartScreen}>
          <img src={cartIcon} alt="cart-icon" />
          {
            itemsInCart > 0
            && <span className="cart-badge">{itemsInCart}</span>
          }
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
