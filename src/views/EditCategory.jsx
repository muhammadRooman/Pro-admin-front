import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Link } from "react-router-dom";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../assets/css/styles.css";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
// import {  } from "react-router-dom";
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
function EditCategory() {
  const [flag, setflag] = useState(false);
  const [description, setdescription] = useState("");
  const [stat, setstat] = useState();
  const [formdata, setformdata] = useState({
    _id: "",
    name: "",
    description: "",
    photo: "",
    status: "",
    errors: {},
  });

  useEffect(() => {
    console.log("formdata", formdata);
  }, [formdata]);
  const params = useParams();
  useEffect(() => {
    console.log("params id", params.id);
    axios
      .get(`/admin/category/viewsingle/${params.id}`)
      .then((res) => {
        setdescription(res.data.description);
        setstat(res?.data?.status);
        setformdata(res.data);

        console.log("user data", res.data);
      })
      .catch((error) => {
        console.log("errors", error);
      });
  }, [params.id]);
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
  console.log("stat", stat);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formdata.name);
    formData.append("photo", formdata.photo);
    formData.append("description", description);
    formData.append("status", stat);
    console.log("Before FormData", formData);

    axios
      .put(`/admin/category/edit/${formdata._id}`, formData)
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
  // useEffect(() => {
  //   console.log("status", stat);
  // }, [stat]);

  const handleStatus = (s) => {
    setstat(!s);
  };
  console.log(stat);
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
                          value={formdata?.name}
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
                          data={description}
                          //   content={formdata?.description}
                          onReady={(editor) => {
                            // You can store the "editor" and use when it is needed.
                          }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setdescription(data);
                            // setformdata({ ...formdata, description: data });
                            // console.log({ event, editor, data });
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
                        <img
                          src={process.env.REACT_APP_imageurl + formdata.photo}
                          style={{ width: "40px", height: "40px" }}
                          alt=""
                        />
                        <div>
                          <input
                            error={formdata?.errors?.photo}
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
                          {formdata?.errors?.photo}
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
                            {console.log(
                              "helllllllllllllll",
                              JSON.stringify(stat)
                            )}
                            <input
                              name="status"
                              type="checkbox"
                              value={stat}
                              checked={stat}
                              onClick={() => handleStatus(stat)}
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
                      {flag && <code>Edited Successful</code>}
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

export default EditCategory;
