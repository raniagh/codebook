const getSession = () => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid };
};

export const getUser = async () => {
  const { token, cbid } = getSession();
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //we use 600 code to restict access to some ressources
  //User loggedIn only has access to own ressources
  const response = await fetch(
    `http://localhost:8000/600/users/${cbid}`,
    requestOptions
  );
  const data = await response.json();
  return data;
};

export const createOrder = async (cartList, total, user) => {
  const { token } = getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const response = await fetch("http://localhost:8000/660/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  return data;
};

export const getUserOrders = async () => {
  const { token, cbid } = getSession();
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
  return data;
};
