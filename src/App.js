import React from "react";
import List from "./e-commerce/list";
import MockProducts from "./e-commerce/mock";
import AddNew from "./e-commerce/addList";

function App() {
  return (
    <div>
      <div>
        <AddNew />
      </div>
      <List products={MockProducts} />
    </div>
  );
}

export default App;
