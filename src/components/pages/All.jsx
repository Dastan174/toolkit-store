import React, { useEffect, useState } from "react";
import "./styles.css";
import ProductCard from "./ProductCard";

function All() {
  const cardData = [
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
      category: "care",
      id: 1,
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
      category: "",
      id: 2,
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
      category: "",
      id: 3,
    },
    {
      img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
      title: "Beauty Base Protect",
      price: "250$",
      category: "",
      id: 4,
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from  The Ordinary",
      price: "100$",
      category: "",
      id: 5,
    },
    {
      img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
      title: "Beauty Base Protect",
      price: "250$",
      category: "",
      id: 6,
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
      category: "",
      id: 7,
    },
    {
      img: "https://hips.hearstapps.com/hmg-prod/images/the-ordinary-review-646396e23ed75.jpg?crop=0.5023255813953489xw:1xh;center,top&resize=640:*",
      title: "The best products from The Ordinary",
      price: "100$",
      category: "",
      id: 8,
    },
    {
      img: "https://www.sculptedbyaimee.com/cdn/shop/products/protect-secondary.jpg?v=1690885808&width=800",
      title: "Beauty Base Protect",
      price: "250$",
      category: "",
      id: 9,
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
      category: "",
      id: 10,
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
      category: "",
      id: 11,
    },
    {
      img: "https://pyxis.nymag.com/v1/imgs/a20/102/b19d78d0773a727c65562f38a769656f5e-Long-Lasting-Hydrating-L33.w710.jpg",
      title: "World’s Most Luxurious Lipsticks ",
      price: "50$",
      category: "",
      id: 12,
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="counts">
          <div className="img"></div>
        </div>
        <div className="all-content">
          <div className="cards">
            {cardData.map((el, idx) => (
              <ProductCard el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default All;
