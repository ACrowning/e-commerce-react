import { useState } from "react";
import List from "./e-commerce/list";
import MockProducts from "./e-commerce/mock";

function App() {
  const [products, setProducts] = useState(MockProducts);

  const addItem = () => {
    setProducts([...products, newProduct]);
  };

  const newProduct = {
    id: `${products.length + 1}`,
    title: 1,
    description: 1,
    price: 1,
    favorite: false,
    count: 1,
  };

  return (
    <div>
      <div>
        <div>
          <input
            className="inputTitle"
            type="text"
            placeholder="Enter the title"
          />
        </div>
        <div>
          <input
            className="inputDescription"
            type="text"
            placeholder="Enter the description"
          />
        </div>
        <div>
          <input
            className="inputPrice"
            type="number"
            placeholder="Enter the price"
          />
        </div>
        <div>
          <input
            className="inputCount"
            type="number"
            placeholder="Enter the count"
          />
        </div>
      </div>

      <button onClick={addItem}>Add Item</button>

      <div>
        <List products={MockProducts} />
      </div>
    </div>
  );
}

export default App;
