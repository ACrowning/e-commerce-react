import React from "react";
import List from "./e-commerce/list";
import MockProducts from "./e-commerce/mock";

function App() {
  return (
    <div>
      <List products={MockProducts} />
    </div>
  );
}

export default App;
