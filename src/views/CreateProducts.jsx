import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../assets/css/styles.css";

function CreateProducts() {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md="8">
            <Card>
              <Card.Header className="text-center pb-3">
                <Card.Title as="h4">Add Product</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <Form.Group>
                        <label
                          className="text-capitalize"
                          style={{
                            color: "black",
                            fontSize: "20px",
                          }}
                        >
                          Title
                          <span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <Form.Control
                          placeholder="Enter Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <div>
                        <p
                          style={{
                            color: "black",
                            fontSize: "20px",
                          }}
                        >
                          Description
                        </p>
                        <CKEditor
                          editor={ClassicEditor}
                          data=" "
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                            console.log("Editor is ready to use!", editor);
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                          }}
                          onBlur={(event, editor) => {
                            console.log("Blur.", editor);
                          }}
                          onFocus={(event, editor) => {
                            console.log("Focus.", editor);
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <Form.Group>
                        <label
                          className="text-capitalize"
                          style={{
                            color: "black",
                            fontSize: "20px",
                          }}
                        >
                          Image
                          <span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <div className="custom custom-file">
                          <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            id="custom-file"
                            className="custom-file-input"
                          />
                          <label
                            htmlFor="custom-file"
                            className="custom-file-label"
                          >
                            Choose file
                          </label>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <Form.Group>
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                        >
                          <option default="">Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <Form.Group>
                        <div
                          className="custom-control custom-switch"
                          style={{ padding: "0" }}
                        >
                          <div>
                            <div>
                              <label
                                className="text-capitalize textcolorsize"
                                style={{
                                  color: "black",
                                  fontSize: "20px",
                                }}
                              >
                                Featured
                              </label>
                            </div>
                            <label className="switch">
                              <input type="checkbox" />
                              <span className="slider round"></span>
                            </label>
                          </div>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <Form.Group>
                        <div
                          className="custom-control custom-switch"
                          style={{ padding: "0" }}
                        >
                          <div>
                            <label
                              className="text-capitalize textcolorsize"
                              style={{
                                color: "black",
                                fontSize: "20px",
                              }}
                            >
                              Status
                            </label>
                          </div>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <Form.Group className="d-flex justify-content-between">
                        <Button
                          className="btn closebtn"
                          type="submit"
                          variant="info"
                        >
                          Close
                        </Button>

                        <Button className="btn savebtn">Save</Button>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CreateProducts;
