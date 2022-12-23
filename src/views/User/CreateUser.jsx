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
function CreateUser() {
  const navigate = useNavigate();
  const [flag, setflag] = useState(false);
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone:"",
    password: "",
    password2: "",
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/admin/users/create", formdata)
      .then((res) => {
        // setformdata({ errors: res.data });
        if (res.status === 200) {
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
              <Card.Title as="h4">Create User</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form noValidate onSubmit={handleSubmit}>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>First Name</label>
                      <Form.Control
                        placeholder="First Name"
                        name="Enter your First Name"
                        id="firstname"
                        value={formdata.firstname}
                        error={formdata.errors.firstname}
                        onChange={handleChange}
                        type="text"
                      ></Form.Control>
                      <label htmlFor="firstname"></label>
                      <span className="red-text">
                        {formdata.errors.firstname}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Last Name</label>
                      <Form.Control
                        name="lastname"
                        id="lastname"
                        value={formdata.lastname}
                        error={formdata.errors.lastname}
                        onChange={handleChange}
                        placeholder="Enter your Last Name"
                        type="text"
                      ></Form.Control>
                      <label htmlFor="lastname"></label>
                      <span className="red-text">
                        {formdata.errors.lastname}
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
                        value={formdata.email}
                        placeholder="Enter your Email Address"
                        error={formdata.errors.email}
                        type="email"
                        onChange={handleChange}
                      ></Form.Control>
                      <label htmlFor="email"></label>
                      <span className="red-text">{formdata.errors.email}</span>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Phone</label>
                      <Form.Control
                        name="phone"
                        id="phone"
                        value={formdata.phone}
                        placeholder="Enter your Phone Number"
                        error={formdata.errors.phone}
                        type="number"
                        onChange={handleChange}
                      ></Form.Control>
                      <label htmlFor="phone"></label>
                      <span className="red-text">{formdata.errors.phone}</span>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Password</label>
                      <Form.Control
                        name="password"
                        id="password"
                        value={formdata.password}
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        className={classnames("", {
                          invalid: formdata.errors.password,
                        })}
                      ></Form.Control>
                      <label htmlFor="password"></label>
                      <span className="red-text">
                        {formdata.errors.password}
                      </span>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Confirm Password</label>
                      <Form.Control
                        name="password2"
                        id="password2"
                        value={formdata.password2}
                        placeholder="Confirm Password"
                        type="password"
                        onChange={handleChange}
                        className={classnames("", {
                          invalid: formdata.errors.password2,
                        })}
                      ></Form.Control>
                      <label htmlFor="password2"></label>
                      <span className="red-text">
                        {formdata.errors.password2}
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
                      // onClick={()=>{flag && navigate(`/admin/viewuser`)}}
                    >
                      Create User
                    </Button>
                 
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
  );
}

export default CreateUser;
