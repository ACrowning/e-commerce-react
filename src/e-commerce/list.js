import React from "react";
import Items from "./items";

export default function List(props) {
  return (
    <ul>
      {props.products.map((product) => {
        return <Items product={product} key={product.id} />;
      })}
    </ul>
  );
}
