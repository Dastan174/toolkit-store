import React, { useState, useEffect } from "react";
import Header from "../header";

function Basket() {
  const [basketProduct, setBasketProducts] = useState([]);

  const getProducts = () => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setBasketProducts(storedProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const removeProduct = (productId) => {
    const updatedProducts = basketProduct.filter(
      (product) => product.id !== productId
    );
    setBasketProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <Header />
      <div id="basket">
        <div className="container">
          <h1>Basket</h1>
          <div className="basket">
            {basketProduct.map((product) => (
              <div className="basket-card">
                <img src={product.img} alt="" />
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <button onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Basket;
