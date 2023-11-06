import React from "react";
import List from "./e-commerce/list";
import products from "./e-commerce/mock";

function App() {
  return (
    <div>
      <List products={products} />
    </div>
  );
}

export default App;
