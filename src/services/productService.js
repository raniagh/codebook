export async function getProductList(searchTerm) {
  const response = await fetch(
    //444: no one can create a ressource but can read it
    `http://localhost:8000/444/prducts?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:8000/444/products/${id}`);
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};

export const getFeaturedList = async () => {
  const response = await fetch("http://localhost:8000/444/featured_products");
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
};
