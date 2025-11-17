import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order Placed");
    dispatch(clearAllItems());
    navigate("/");
  };
  return (
    <div className="max-w-[800px] mx-auto bg-white p-5 rounded-[15px] shadow-lg mb-[100px]">
      <div className="flex justify-between items-center mb-5 pb-5 border-b border-gray-300">
        <h2 className="text-lg font-medium m-0">Cart Title</h2>
        <span>{cartSelector.length ? cartSelector.length : 0} items</span>
      </div>
      {cartSelector.length > 0
        ? cartSelector.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b border-gray-300"
            >
              <div className="flex items-center gap-[15px]">
                <img
                  src={item.thumbnail}
                  className="w-[70px] h-[70px] object-cover rounded-[10px]"
                />
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>{item.brand}</p>
                </div>
              </div>
              <div className="text-right">
                <div style={{ display: "flex" }}>
                  <div>
                    <span className="text-[16px] font-bold mb-2 block">
                      ${item.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      className="px-4 py-2 bg-[#457b9d] text-white font-semibold rounded-md hover:bg-[#21867b] transition-colors duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}
      <div className="float-end font-bold text-[#159107]">
        Total : $
        {cartSelector.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </div>
      <button
        onClick={handlePlaceOrder}
        className="mt-2 px-4 py-2 bg-[#457b9d] text-white font-semibold rounded-md hover:bg-[#21867b] transition-colors duration-200"
      >
        Place Order
      </button>
    </div>
  );
};

export default CartList;
