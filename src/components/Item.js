import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); // Initialize inCart state to false

  // Function to handle adding/removing from cart and updating inCart state
  function handleCartToggle() {
    setInCart(!inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span className="item-name">{name}</span>
      <span className="item-category">{category}</span>
      <button className="add-to-cart" onClick={handleCartToggle}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;