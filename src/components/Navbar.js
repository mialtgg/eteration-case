import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar({ totalPrice, setSearchTerm }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchTerm(e.target.value); // Arama terimini parent component'e gönderir
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Arama submit işlemleri burada yapılabilir
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Eteration
        </a>

        {/* Arama Barı */}
        <form className="d-flex mx-auto" style={{ width: "50%" }} onSubmit={handleSearchSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={handleSearchChange} // Input değeri değiştiğinde setSearchTerm çağrılır
            style={{ borderRadius: "0px 0 0 0px" }}
          />
          <button
            className="btn btn-light"
            type="submit"
            style={{ borderRadius: "0 0px 0px 0" }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className="d-flex align-items-center">
          {/* Toplam Fiyat */}
          <div className="navbar-text me-4">
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Total: <strong>{totalPrice.toFixed(2)}₺</strong>
          </div>

          {/* Kullanıcı Bilgisi */}
          <div className="navbar-text">
            <FontAwesomeIcon icon={faUser} className="me-2 text-white" />
            Mine
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
