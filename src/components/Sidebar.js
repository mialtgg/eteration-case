import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="d-none d-md-block p-3 bg-light border-end" style={{ width: "250px", borderRadius: "0", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
      {/* Sort By Section (Radio Button) */}
      <div className="mb-3">
        <h6 className="text-muted" style={{ opacity: 0.7 }}>Sort By</h6>
        <div className="card" style={{ borderRadius: "0", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div className="card-body">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sort" id="newest" />
              <label className="form-check-label" htmlFor="newest">New to Old</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sort" id="oldest" />
              <label className="form-check-label" htmlFor="oldest">Old to New</label>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section (Checkbox List) */}
      <div className="mb-3">
        <h6 className="text-muted" style={{ opacity: 0.7 }}>Brands</h6>
        <div className="card" style={{ borderRadius: "0", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div className="card-body p-0">
            {/* Brands Search with Icon inside */}
            <div className="p-2">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search Brands"
                  aria-label="Search"
                />
                <span className="input-group-text bg-white border-start-0" style={{ borderRadius: "0", cursor: "pointer" }}>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
            </div>

            {/* Brands List with Scroll (Checkbox) */}
            <div className="p-2" style={{ maxHeight: "150px", overflowY: "auto" }}>
              {/* Checkbox List */}
              <div className="form-check">
                <input type="checkbox" id="apple" className="form-check-input" />
                <label className="ms-2 form-check-label" htmlFor="apple">Apple</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="samsung" className="form-check-input" />
                <label className="ms-2 form-check-label" htmlFor="samsung">Samsung</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="xiaomi" className="form-check-input" />
                <label className="ms-2 form-check-label" htmlFor="xiaomi">Xiaomi</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="lg" className="form-check-input" />
                <label className="ms-2 form-check-label" htmlFor="lg">LG</label>
              </div>
              <div className="form-check">
                <input type="checkbox" id="huawei" className="form-check-input" />
                <label className="ms-2 form-check-label" htmlFor="huawei">Huawei</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
