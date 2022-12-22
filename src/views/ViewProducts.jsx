import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../assets/css/styles.css";
function ViewProducts() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Products</Card.Title>
                <button className="btn product_btn">Add Product</button>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">#</th>
                      <th className="border-0">Image</th>
                      <th className="border-0">Title</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Created At</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td>$36,738</td>
                      <td>
                        <button
                          className="mr-1"
                          style={{
                            border: "solid 2px green",
                          }}
                        >
                          <i
                            className="fas fa-edit"
                            style={{ color: "green" }}
                          ></i>
                        </button>
                        <button
                          style={{
                            border: "solid 2px red",
                          }}
                        >
                          <i
                            className="fas fa-trash"
                            style={{ color: "red" }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ViewProducts;
