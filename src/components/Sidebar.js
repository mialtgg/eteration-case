import React, { useState, useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
function Sidebar({ onChange }) {
  const [sortOption, setSortOption] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("https://5fc9346b2af77700165ae514.mockapi.io/products");
        if (!response.ok) {
          throw new Error("Veriler alınamadı!");
        }
        const data = await response.json();
        const uniqueBrands = [...new Set(data.map((product) => product.brand))];
        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Hata:", error.message);
      }
    };

    fetchBrands();
  }, []);

  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    setSortOption(newSortOption);
   
    onChange({ sortOption: newSortOption, selectedBrands });
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    const isChecked = e.target.checked;

    const updatedBrands = isChecked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((b) => b !== brand);

    setSelectedBrands(updatedBrands);
    // 'onChange' ile güncelleme yapılır
    onChange({ sortOption, selectedBrands: updatedBrands });
  };

  return (
    <div>
      <Row>
        <Col className="mb-3 mt-4 ps-4">
          <Card style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Card.Body>
              <h6>Sort By</h6>
              <Form>
                <Form.Check
                  type="radio"
                  id="newest"
                  value="newest"
                  name="sort"
                  label="New to Old"
                  onChange={handleSortChange}
                  checked={sortOption === "newest"} // Seçilen değeri kontrol et
                />
                <Form.Check
                  type="radio"
                  id="oldest"
                  value="oldest"
                  name="sort"
                  label="Old to New"
                  onChange={handleSortChange}
                  checked={sortOption === "oldest"} // Seçilen değeri kontrol et
                />
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-3 mt-4 ps-4">
          <Card style={{ maxHeight: "300px", overflowY: "auto" }}>
            <Card.Body>
              <h6>Brands</h6>
              <div>
                {brands.length === 0 ? (
                  <p>Yükleniyor...</p>
                ) : (
                  brands.map((brand, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      value={brand}
                      label={brand}
                      onChange={handleBrandChange}
                      checked={selectedBrands.includes(brand)} // Seçili markayı kontrol et
                    />
                  ))
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
