export default function Product({ product }) {
  return (
    <li>
      <img src="https://picsum.photos/200/300?random" alt={product.title} />
      <div>
        {product.title}, {product.description}, {product.price}
      </div>
    </li>
  );
}
