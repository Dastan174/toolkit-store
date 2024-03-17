import React from "react";
import Header from "../header";

function Protective() {
  const addProductToBasket = () => {
    const addedProduct = JSON.parse(localStorage.getItem("products")) || [];
    addedProduct.push(el);
    localStorage.setItem("products", JSON.stringify(addedProduct));
  };
  const protectiveData = [
    {
      img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
      title: "Beauty Base Protect",
      price: "250$",
    },

    {
      img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
      title: "Beauty Base Protect",
      price: "250$",
    },

    {
      img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
      title: "Beauty Base Protect",
      price: "250$",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        <div className="counts">
          <div className="img"></div>
        </div>
        <div className="all-content">
          <div className="cards">
            {protectiveData.map((el, idx) => (
              <div className="card">
                <img src={el.img} alt={el.title} />
                <h3>{el.title}</h3>
                <p>{`Price: ${el.price}`}</p>

                <button onClick={addProductToBasket} className="home-btn">
                  Buy now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protective;
