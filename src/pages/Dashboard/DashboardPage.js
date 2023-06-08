import { DashbaordCard } from "./components/DashboardCard";
import { DashbaordEmpty } from "./components/DashboardEmpty";

export const DashbaordPage = () => {
  const orders = [];
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
