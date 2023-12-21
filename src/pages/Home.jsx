import { useState, useEffect } from "react";
import { productList } from "../constants/constants";

const Home = () => {
  const [products, setProducts] = useState(productList);
  useEffect(() => {}, []);
  console.log(products);
  return (
    <main className="mb-12 h-full">
      <h1 className="text-6xl mb-12">Shop</h1>
      {/* Shop */}
      <section className="grid grid-cols-5 grid-rows-auto gap-5">
        {/* {products.map((product) => {
          return (
            <section key={product.siteId}>
              <div className="h-32">
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </section>
          );
        })} */}
        {products.map((item) => {
          return (
            <span key={item.siteId} className="">
              <div className="h-[23rem] mb-4 flex items-center justify-center">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="h-full w-full object-cover hover:scale-[103%] transition ease-out 3000s"
                />
              </div>
              <span className="text-lg text-gray-400">{item.name}</span>
            </span>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
