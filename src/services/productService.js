const API_URL = "https://5fc9346b2af77700165ae514.mockapi.io/products";

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Veriler alınamadı!");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
