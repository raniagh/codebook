export const login = async (authDetail) => {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch("http://localhost:8000/login", requestOptions);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
};

export const register = async (authDetail) => {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(
    "http://localhost:8000/register",
    requestOptions
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();

  if (data.accessToken) {
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }
  return data;
};

export const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("cbid");
};
