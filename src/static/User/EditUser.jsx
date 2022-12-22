import axios from "axios";
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { Link,useNavigate } from "react-router-dom";
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
import "../../assets/css/styles.css";
import { useParams } from "react-router";
// const [formdata, setformdata] = useState({});
function EditUser() {
  let navigate=useNavigate()
  // const [id, setId] = useState();
  const [flag, setflag] = useState(false);
  const [formdata, setformdata] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    errors: {},
  });

  // setId(useParams());

  useEffect(() => {
    console.log("formdata", formdata);
  }, [formdata]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setflag(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [flag]);

  const params = useParams();
  useEffect(() => {
    console.log("params id", params.id);
    axios
      .get(`/admin/users/viewsingle/${params.id}`)
      .then((res) => {
        setformdata(res?.data);

        console.log("user data", res.data);
      })
      .catch((error) => {
        console.log("errors", error);
      });
  }, [params.id]);

  useEffect(() => {
    console.log("formdata updated", formdata);
  }, [formdata]);

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formdata);
    console.log("params id", params.id);
    axios
      .put(`/admin/users/edit/${formdata._id}`, formdata)
      .then((res) => {
        // setformdata({ errors: res.data });
        if (res?.status === 200) {
          setflag(true);
          navigate(`/admin/viewUsers`)
        }
      })
      .catch((err) => {
        setformdata({ ...formdata, errors: err.response.data });
        console.log("formdata.errors", err.response.data);
      });
  };

  return (
    <Container>
      <Row>
        <Col md="8">
          <Card>
            <Card.Header className="text-center">
              <Card.Title as="h4">Edit User</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>FirstName</label>
                      <Form.Control
                        placeholder="First Name"
                        name="firstname"
                        id="firstname"
                        value={formdata?.firstname}
                        error={formdata?.errors?.firstname}
                        onChange={handleChange}
                        type="text"
                      ></Form.Control>
                      <label htmlFor="firstname"></label>
                      <span className="red-text">
                        {formdata?.errors?.firstname}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>LastName</label>
                      <Form.Control
                        name="lastname"
                        id="lastname"
                        value={formdata?.lastname}
                        error={formdata?.errors?.lastname}
                        onChange={handleChange}
                        placeholder="Last Name"
                        type="text"
                      ></Form.Control>
                      <label htmlFor="lastname"></label>
                      <span className="red-text">
                        {formdata?.errors?.lastname}
                      </span>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Email</label>
                      <Form.Control
                        name="email"
                        id="email"
                        value={formdata?.email}
                        placeholder="Email Address"
                        error={formdata?.errors?.email}
                        type="email"
                        onChange={handleChange}
                      ></Form.Control>
                      <label htmlFor="email"></label>
                      <span className="red-text">
                        {formdata?.errors?.email}
                      </span>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col className="pr-1 d-flex justify-content-center">
                 
                    <Button
                      className="btn-fill pull-right mt-3"
                      type="submit"
                      variant="info"
                    >
                      Edit User
                    </Button>
                 
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
  );
}

export default EditUser;
