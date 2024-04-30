import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Product from "../Product";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchproducts() {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    }
    fetchproducts();
  }, []);

  return (
    <Container>
      <br />
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product prosuct={products} />
            {/* <Card className="my-3 p-3 rounded">
              <img src={product.image} alt="" />
            </Card>
            <h3>{product.productname}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <h3>{product.productinfo}</h3> */}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
