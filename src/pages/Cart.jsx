import { useState } from "react";

const Cart = () => {
  const [selected, setSelected] = useState(false);
  return (
    <section>
      <h1 className="text-4xl mb-4">Shopping Cart</h1>
      {/* Horizontal Line */}
      <div className=" mb-4"></div>
      {/* Cart Item */}
      <section className="mb-4 border-y border-y-slate-200 py-4">
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          value={selected}
          onChange={() => setSelected(!selected)}
        />
      </section>
    </section>
  );
};

export default Cart;
