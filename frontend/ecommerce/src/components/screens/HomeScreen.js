import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Product from "../Product";
import { listProducts } from "../../actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { error, loading, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <br />
      <h1>Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"} children={error} />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default HomeScreen;
