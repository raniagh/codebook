export async function getProductList(searchTerm) {
  const reponse = await fetch(
    //444: no one can create a ressource but can read it
    `http://localhost:8000/444/products?name_like=${
      searchTerm ? searchTerm : ""
    }`
  );
  const data = await reponse.json();
  return data;
}

export const getProduct = async (id) => {
  const response = await fetch(`http://localhost:8000/444/products/${id}`);
  const data = await response.json();
  return data;
};

export const getFeaturedList = async () => {
  const reponse = await fetch("http://localhost:8000/444/featured_products");
  const data = await reponse.json();
  return data;
};
