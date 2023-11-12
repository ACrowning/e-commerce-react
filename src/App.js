import { useState } from "react";
import List from "./e-commerce/list";
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

  return (
    <div>
      <div>
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
      </div>

      <button onClick={addItem}>Add Item</button>

      <div>
        <List products={products} />
      </div>
    </div>
  );
}

export default App;
