import { useEffect, useState } from "react";
import { DashbaordCard } from "./components/DashboardCard";
import { DashbaordEmpty } from "./components/DashboardEmpty";

export const DashbaordPage = () => {
  const [orders, setOrders] = useState([]);
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(
        `http://localhost:8000/660/orders?user.id=${cbid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data);
    }

    fetchOrders();
  }, [token]);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashbaordCard order={order} key={order.id} />)}
      </section>
      <section>{!orders.length && <DashbaordEmpty />}</section>
    </main>
  );
};
