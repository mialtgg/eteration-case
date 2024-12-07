import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          Eteration
        </a>

        {/* Search */}
        <div className="d-flex">
          <input
            className="form-control border-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{borderRadius: "0px 0 0 0px"}} // Köşe yuvarlama
          />
          <button className="btn btn-light" type="submit" style={{borderRadius: "0 0px 0px 0"}}> {/* Button'ın kenarlarını yuvarla */}
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Kullanıcı ve Toplam Fiyat */}
        <div className="d-flex align-items-center ms-3">
          {/* Total Price */}
          <div className="navbar-text me-3">
            <FontAwesomeIcon icon={faCartShopping} className="me-2" />
            Total: <strong>117,000₺</strong>
          </div>

          {/* Kullanıcı */}
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
