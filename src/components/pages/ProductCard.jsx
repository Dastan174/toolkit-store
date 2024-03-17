import React from "react";

const ProductCard = ({ el }) => {
  const addProductToBasket = () => {
    const addedProduct = JSON.parse(localStorage.getItem("products")) || [];
    addedProduct.push(el);
    localStorage.setItem("products", JSON.stringify(addedProduct));
  };
  return (
    <div className="card">
      <img src={el.img} alt={el.title} />
      <h3>{el.title}</h3>
      <p>{`Price: ${el.price}`}</p>

      <button onClick={addProductToBasket} className="home-btn">
        Buy now
      </button>
    </div>
  );
};

export default ProductCard;
