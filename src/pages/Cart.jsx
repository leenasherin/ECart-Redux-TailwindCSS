import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem, emptyCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCart = useSelector((state) => state.cartReducer);

  // Function to empty the cart with confirmation
  const emptyCartHandler = () => {
    if (window.confirm("Are you sure you want to empty the cart?")) {
      dispatch(emptyCart()); // Dispatching the emptyCart action
    }
  };

  // Function to handle checkout
  const handleCheckout = () => {
    alert("Order confirmed! Thank you for your purchase.");
    dispatch(emptyCart()); // Empty the cart after checkout
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-5">
        {userCart?.length > 0 ? (
          <>
            <h1 className="text-5xl font-bold text-blue-600">Cart Summary</h1>
            <div className="grid grid-cols-3 gap-4 mt-5">
              {/* Cart Items Section */}
              <div className="col-span-2 border rounded p-5 shadow">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <td className="font-semibold">#</td>
                      <td className="font-semibold">Name</td>
                      <td className="font-semibold">Image</td>
                      <td className="font-semibold">Quantity</td>
                      <td className="font-semibold">Price</td>
                      <td className="font-semibold">Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {userCart.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.title || "No Name Available"}</td>
                        <td>
                          <img
                            width="70px"
                            height="70px"
                            src={item.thumbnail || "https://via.placeholder.com/70"}
                            alt={item.name || "No Image"}
                          />
                        </td>
                        <td>
                          <div className="flex">
                            <button 
                              className="font-bold px-2" 
                              onClick={() => dispatch(decrementQuantity(item.id))}
                            >
                              -
                            </button>
                            <input
                              style={{ width: "40px" }}
                              type="text"
                              className="border rounded p-1 mx-2 text-center"
                              value={item.quantity}
                              readOnly
                            />
                            <button 
                              className="font-bold px-2" 
                              onClick={() => dispatch(incrementQuantity(item.id))}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <button 
                            className="text-red-500" 
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="float-right mt-5">
                  <button onClick={emptyCartHandler} className="bg-red-600 rounded p-2 text-white">
                    Empty Cart
                  </button>
                  <Link to={"/"} className="bg-blue-500 ms-3 rounded p-2 text-white">
                    Shop More
                  </Link>
                </div>
              </div>

              {/* Total Amount Section */}
              <div className="col-span-1">
                <div className="border rounded shadow p-5">
                  <h2 className="text-2xl font-bold">
                    Total Amount:{" "}
                    <span className="text-red-600">
                      ${userCart.reduce((total, item) => total + item.price * item.quantity, 0)}
                    </span>
                  </h2>
                  <hr />
                  <button 
                    className="bg-green-700 rounded p-2 text-white w-full mt-4"
                    onClick={handleCheckout}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Empty Cart Message */
          <div className="flex flex-col justify-center items-center h-screen">
            <img
              className="w-100 h-1/2"
              src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif"
              alt="Empty Cart"
            />
            <h1 className="text-3xl text-red-600">Your Cart is Empty!!!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
