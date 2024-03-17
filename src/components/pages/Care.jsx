import React from "react";
import Header from "../header";

function Care() {
  const addProductToBasket = () => {
    const addedProduct = JSON.parse(localStorage.getItem("products")) || [];
    addedProduct.push(el);
    localStorage.setItem("products", JSON.stringify(addedProduct));
  };
  const careData = [
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
      category: "care",
    },

    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
    },

    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from  The Ordinary",
      price: "100$",
    },

    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
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
            {careData.map((el, idx) => (
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

export default Care;
