import React, { useEffect, useState } from "react";
import { addItem, removeItem } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  const [products, setProduct] = useState([]);

  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const jsonResp = await response.json();
      setProduct(jsonResp?.products);
    };
    fetchData();
  }, []);
  return (
    <div className="grid place-items-center grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 mt-8">
      {products.map((item) => (
        <div
          key={item.id}
          className="w-[250px] bg-white rounded-[10px] shadow-md overflow-hidden flex flex-col transition-transform duration-200 ease-linear hover:-translate-y-[5px]"
        >
          <img src={item.thumbnail} className="w-full h-[180px] object-cover" />
          <div className="p-[15px] flex flex-col gap-2">
            <h3 className="text-[16px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {item.title}
            </h3>

            <p className="text-[13px] text-[#666]">{item.brand}</p>

            <p className="text-[16px] font-bold text-[#2a9d8f]">{item.price}</p>

            <p className="text-[13px] text-[#999]">{item.rating}★★★★☆</p>

            {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
              <button
                onClick={() => dispatch(removeItem(item))}
                className="px-4 py-2 bg-[#6c0606] text-white font-semibold rounded-md hover:bg-[#b55757] transition-colors duration-200"
              >
                Remove from cart
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(item))}
                className="px-4 py-2 bg-[#457b9d] text-white font-semibold rounded-md hover:bg-[#21867b] transition-colors duration-200"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
