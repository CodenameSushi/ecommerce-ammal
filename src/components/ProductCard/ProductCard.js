import React from "react";
import { ProductCardContainer } from "./ProductCard.styled";
import { priceFormatter } from "../../utils/priceFormatter";

const ProductCard = (props) => {
  const {
    product,
    addToCart,
    isOnCartScreen,
    isOnProductsScreen,
    decreaseQuantityInCart,
    increaseQuantityInCart,
    deleteFromCart
  } = props;

  return (
    <ProductCardContainer>
      <img src={product.imageUrl} alt={product.imageAlt} />

      <div>
        <div className="card-header">
          <h2>{product.name}</h2>
          <span>{product.rating}</span>
        </div>
        <div className="card-price-and-action">
          <span>{priceFormatter.format(product.price)}</span>


          {isOnCartScreen && product.quantity > 1 && (
            <button onClick={() => decreaseQuantityInCart(product)}>-</button>
          )}


          {isOnProductsScreen && (
            <button onClick={() => addToCart(product)}>+ Add to Cart</button>
          )}


          {isOnCartScreen && <span>x{product.quantity}</span>}


          {isOnCartScreen && (
            <button onClick={() => increaseQuantityInCart(product)}>+</button>
          )}

          {isOnCartScreen
          && <button 
          className="cart-card-delete"
          onClick={() => deleteFromCart(product)}
          >
            x
          </button>
            
          }


        </div>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;
