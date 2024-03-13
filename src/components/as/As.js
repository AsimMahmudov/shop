import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../hero/Hero";

const As = () => {
  ////////////////

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [dis, setDis] = useState("");
  const [img, setImg] = useState("");

  const { products } = useSelector((s) => s);
  console.log(products);
  const dispatch = useDispatch();

  function getProduct() {
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      price,
      cat,
      dis,
      img,
    };
    dispatch({ type: "ToDo", paylaod: newProduct });

    setName("");
    setPrice("");
    setCat("");
    setDis("");

    setImg("");
  }

  console.log(name);

  ///////////////

  return (
    <div>
      <div className="container">
        <div className="addPro">
          <input
            onChange={(e) => setImg(e.target.value)}
            value={img}
            type="url"
            placeholder="product Url(...)"
          />
          <div className="box">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Name"
            />

            <div className="rr">
              <input
                onChange={(e) => setCat(e.target.value)}
                value={cat}
                type="text"
                placeholder="categori"
              />

              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className="dd"
                type="text"
                placeholder="Price"
              />
            </div>
            <input
              onChange={(e) => setDis(e.target.value)}
              value={dis}
              className="ab"
              type="text"
              placeholder="discription"
            />
            <button onClick={() => getProduct()}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default As;
