import React, { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import axios from "axios";
import { StoreContext } from "../../Context/StoreContext.jsx";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
  try {
    if (!token) return;

    // Choose GET or POST based on backend
    const response = await axios.get(`${url}/api/order/userorders`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (response.data.success) {
      // sort newest first
      const sortedOrders = (response.data.data || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setOrders(sortedOrders);
    } else {
      console.error("❌ No orders found");
    }
  } catch (err) {
    console.error("❌ Failed to fetch orders:", err);
  }
};


  useEffect(() => {
    fetchOrders();
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {orders.length === 0 ? (
          <p className="no-orders">You have no orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="Order" />

              <p>
                {order.items.map((item, i) => (
                  <span key={i}>
                    {item.name} x {item.quantity}
                    {i < order.items.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>

              <p>₹{order.amount}</p>
              <p>Items: {order.items.length}</p>
              <p>
                <span className="status-dot">&#x25cf;</span>{" "}
                <b>{order.status}</b>
              </p>

              <button className="track-btn">Track Order</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrders;
