import React, { useState } from "react";

import styles from "./navbar.module.css";

export default function Navbar({ addItem, products }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCount, setInputCount] = useState("");

  const onAdd = () => {
    const newProduct = {
      title: inputTitle,
      description: inputDescription,
      price: inputPrice,
      favorite: false,
      count: inputCount,
    };
    addItem([...products, newProduct]);
    setInputTitle("");
    setInputDescription("");
    setInputPrice("");
    setInputCount("");
  };
  return (
    <div className={styles.navbar}>
      <div>
        <input
          value={inputTitle}
          onChange={(event) => setInputTitle(event.target.value)}
          type="text"
          placeholder="Enter the title"
        />
      </div>
      <div>
        <input
          value={inputDescription}
          onChange={(event) => setInputDescription(event.target.value)}
          type="text"
          placeholder="Enter the description"
        />
      </div>
      <div>
        <input
          value={inputPrice}
          onChange={(event) => setInputPrice(event.target.value)}
          type="number"
          placeholder="Enter the price"
        />
      </div>
      <div>
        <input
          value={inputCount}
          onChange={(event) => setInputCount(event.target.value)}
          type="number"
          placeholder="Enter the count"
        />
      </div>
      <button onClick={onAdd}>Add</button>
    </div>
  );
}
