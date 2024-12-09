import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";
import Cart from "./components/Cart";
import ProductDetail from "./pages/ProductDetail"; // Detay sayfası için import
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // CSS dosyasını ekliyoruz

function App() {
  const [filterData, setFilterData] = useState({
    sortOption: "",
    selectedBrands: [],
  });
  const handleSidebarChange = (filterOptions) => {
    console.log(filterOptions); // Gelen veriyi burada kontrol edebilirsiniz
  };

  // onChange fonksiyonunu tanımlıyoruz
  const handleFilterChange = (newFilterData) => {
    console.log(newFilterData); // Yeni filtre verisini loglayabiliriz
    setFilterData(newFilterData); // Filtreyi state'e kaydediyoruz
  };
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]); // Ürünleri burada tutacağız
  const [searchTerm, setSearchTerm] = useState("");

  // Ürünleri filtreleme
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sepete ürün ekleme
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Sepetten ürün kaldırma
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Ürün miktarını güncelleme
  const updateQuantity = (productId, action) => {
    setCart(
      cart.map((item) => {
        if (item.id === productId) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };

  // Toplam fiyat hesaplama
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Ürün verilerini almak
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://5fc9346b2af77700165ae514.mockapi.io/products"
        );
        if (!response.ok) {
          throw new Error("Veriler alınamadı!");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  // Sepeti localStorage'a kaydet
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // localStorage'tan sepeti yükle
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  return (
    <Router>
      <div className="app">
       
        {/* Navbar */}
        <Navbar totalPrice={totalPrice} setSearchTerm={setSearchTerm} />

        {/* Ana İçerik */}
        <div className="main-content d-flex flex-column flex-md-row">
         
        <Sidebar onChange={handleSidebarChange} />

          <div className="product-list col-12 col-md-8">
            <Routes>
              {/* Ürün Listesi */}
              <Route
                path="/"
                element={
                  <ProductList
                    products={filteredProducts}
                    onAddToCart={addToCart}
                  />
                }
              />

              {/* Ürün Detay Sayfası */}
              <Route
              
                path="/product/:id"
                element={
                  <ProductDetail
                    products={products}
                    onAddToCart={addToCart}
                  />
                }
              />
            </Routes>
          </div>

          {/* Sepet */}
          <div className="col-12 col-md-2">
            <Cart
              cart={cart}
              onRemove={removeFromCart}
              totalPrice={totalPrice}
              onUpdateQuantity={updateQuantity}
            />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
