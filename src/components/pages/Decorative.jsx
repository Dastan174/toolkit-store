import React from "react";
import Header from "../header";

function Decorative() {
  const addProductToBasket = () => {
    const addedProduct = JSON.parse(localStorage.getItem("products")) || [];
    addedProduct.push(el);
    localStorage.setItem("products", JSON.stringify(addedProduct));
  };
  const decorativeData = [
    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
    },

    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
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
            {decorativeData.map((el, idx) => (
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

export default Decorative;
