import { useState } from "react";
import Items from "./e-commerce/items";
import MockProducts from "./e-commerce/mock";

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

  const UlStyle = {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
  };

  const navbar = {
    display: "flex",
    width: "auto",
    height: "auto",
    padding: "20px 25px",
    marginRight: "none",
    border: "1px solid black",
    borderLeft: "none",
    borderBottom: "none",
    borderTop: "none",
    boxSizing: "content-box",
    flexDirection: "column",
    gap: "15px",
  };

  const divProducts = {
    display: "flex",
    boxSizing: "content-box",
  };

  const productStyle = {
    marginRight: "40px",
  };

  const containerStyle = {
    display: "flex",
    flexShrink: 2,
    border: "1px solid black",
  };

  return (
    <div style={containerStyle}>
      <div style={navbar}>
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

      <div style={divProducts}>
        <ul style={UlStyle}>
          {products.map((product, productIndex) => (
            <div style={productStyle} key={product.id}>
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
