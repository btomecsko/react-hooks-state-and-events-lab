import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  function addToCartClick(){
    setInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick={addToCartClick}>{isInCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
