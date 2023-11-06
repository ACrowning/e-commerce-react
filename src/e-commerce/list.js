import React from "react";
import Mock from "./items";

export default function List(props) {
  return (
    <ul>
      {props.products.map((product) => {
        return <Mock product={product} key={product.id} />;
      })}
    </ul>
  );
}
