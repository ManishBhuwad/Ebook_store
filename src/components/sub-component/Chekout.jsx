import React from "react";
import Cart from "./Cart";
import CartComp from "./CartComp";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "./OrderDetails";
import { addOrder } from "../../store/orderSlice";


function Chekout() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const params = useParams();
  const cartData = useSelector((state) => state.cart.items);

  const orderData = cartData.filter((item) => item.id == params.id);
  const orderItem = orderData[0];

  const handleOrders = (e) => {
    e.preventDefault();

    const dataWithDate = {
      ...orderItem,
      orderDate: new Date().toLocaleString(),
    };
    dispatch(addOrder(dataWithDate));

    navigate("/home")

  };

  return (
    <div className="w-10/12 mx-auto">
      <div
        className="w-full h-24 border-b flex items-center"
        style={{ borderBottom: "2px solid #7209b7" }}
      >
        <h3 className="text-3xl">Checkout</h3>
      </div>
      <div className="w-full px-2 py-4">
        <form action="" onSubmit={handleOrders}>
          <div className="flex gap-16">
            <div className="w-6/12 flex flex-col gap-2">
              <div className="w-full py-2">
                <h3 className="text-2xl">Billing Details</h3>
              </div>
              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-1">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="h-12 border pl-2  focus:outline-gray-500 focus:outline-dotted "
                  />
                </div>
                <div className="w-1/2 flex flex-col gap-1">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  required
                  className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="street_address">Street address</label>
                <input
                  type="text"
                  name="country"
                  required
                  className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="town">Town/City</label>
                <input
                  type="text"
                  name="town"
                  required
                  placeholder="Town/City"
                  className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="state"
                  required
                  placeholder="state"
                  className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  required
                  placeholder="Pincode"
                  className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  name="phone"
                  required
                  placeholder=""
                  className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=""
                  className="h-12 pl-2 border focus:outline-gray-500 focus:outline-dotted"
                />
              </div>
            </div>
            <div className="w-5/12  py-10">
              <div className="h-96 border px-4">
                <h3 className="text-xl">Your order</h3>
                <div className="my-2">
                  <h4 className="text-lg text-gray-600">Product</h4>
                </div>
                <div>
                  <OrderDetails props={orderItem} />
                </div>

                <button
                  type="submit"
                  className="w-full p-2 text-blue-500 border border-blue-500 rounded-sm hover:bg-blue-500 hover:text-white"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chekout;
