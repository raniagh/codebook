import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services";
import { DashbaordCard } from "./components/DashboardCard";
import { DashbaordEmpty } from "./components/DashboardEmpty";
import { toast } from "react-toastify";

export const DashbaordPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchData();
  }, []);

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
