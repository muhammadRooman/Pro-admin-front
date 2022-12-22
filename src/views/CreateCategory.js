import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Link } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../assets/css/styles.css";
import axios from "axios";
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
function CreateCategory() {
  const [flag, setflag] = useState(false);
  const [formdata, setformdata] = useState({
    name: "",
    description: "",
    photo: "",
    status: false,
    errors: {},
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setflag(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [flag]);
  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
    console.log("formdata", formdata);
  };
  const handlePhoto = (e) => [
    setformdata({
      ...formdata,
      photo: e.target.files[0],
    }),
    console.log(formdata.photo),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formdata.name);
    formData.append("photo", formdata.photo);
    formData.append("description", formdata.description);
    formData.append("status", formdata.status);
    console.log("Before FormData", formData);
    axios
      .post("/admin/category/create", formData)
      .then((res) => {
        // setformdata({ errors: res.data });
        if (res.status === 200) {
          setflag(true);
        }
      })
      .catch((err) => {
        setformdata({ ...formdata, errors: err.response.data });
        console.log("formdata.errors", err.response.data);
      });
  };
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md="8">
            <Card>
              <Card.Header className="text-center pb-3">
                <Card.Title as="h4">Add Category</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form
                  encType="multipart/form-data"
                  noValidate
                  onSubmit={handleSubmit}
                >
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
                          Name
                          <span style={{ color: "#ff0000" }}>*</span>
                        </label>
                        <Form.Control
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter Name"
                          value={formdata.name}
                          error={formdata.errors.name}
                          onChange={handleChange}
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
                          data=""
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setformdata({ ...formdata, description: data });
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

                        <div>
                          <input
                            error={formdata.errors.photo}
                            name="photo"
                            onChange={handlePhoto}
                            className="form-control form-control-sm"
                            accept=".png, .jpg, .jpeg"
                            id="formFileSm"
                            type="file"
                          />
                        </div>
                        <label htmlFor="photo"></label>
                        <span className="red-text">
                          {formdata.errors.photo}
                        </span>
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
                            <input
                              type="checkbox"
                              onClick={() =>
                                setformdata({
                                  ...formdata,
                                  status: !formdata.status,
                                })
                              }
                            />
                            <span className="slider round"></span>
                          </label>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center pb-3">
                    <Col md="8">
                      <Form.Group className="d-flex justify-content-between">
                        <Link to="/admin/viewcategory">
                          <Button className="btn closebtn" variant="info">
                            Close
                          </Button>
                        </Link>

                        <Button className="btn savebtn" type="submit">
                          Save
                        </Button>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1 d-flex justify-content-center">
                      {flag && <code>Created Successful</code>}
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

export default CreateCategory;
