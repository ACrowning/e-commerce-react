import { useState } from "react";
import Items from "./e-commerce/items";
import MockProducts from "./e-commerce/mock";
import styles from "./e-commerce/styles.module.css";

function App() {
  const [products, setProducts] = useState(MockProducts);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCount, setInputCount] = useState("");

  const addItem = () => {
    const newProduct = {
      id: `${products.length + 1}`,
      title: inputTitle,
      description: inputDescription,
      price: inputPrice,
      favorite: false,
      count: inputCount,
    };

    setProducts([...products, newProduct]);
    setInputTitle("");
    setInputDescription("");
    setInputPrice("");
    setInputCount("");
  };

  const deleteProduct = (itemsIndex) => {
    const updatedProducts = [
      ...products.slice(0, itemsIndex),
      ...products.slice(itemsIndex + 1),
    ];
    setProducts(updatedProducts);
  };

  return (
    <div className={styles.containerStyle}>
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
        <button onClick={addItem}>Add</button>
      </div>

      <div className={styles.divProducts}>
        <ul className={styles.ulStyle}>
          {products.map((product, productIndex) => (
            <div className={styles.productStyle} key={product.id}>
              <Items product={product} />
              <button onClick={() => deleteProduct(productIndex)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
