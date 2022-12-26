import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../assets/css/styles.css";
import "../../assets/css/styles.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
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
import { Link, Navigate } from "react-router-dom";
import "../../assets/css/styles.css";

function ViewUsers() {
  // const [count, setcount] = useState(1);
  const [userData, setuserdata] = useState([]);
  const [nav, setnav] = useState(false);
  const [id, setid] = useState();
  useEffect(() => {
    console.log("userDataaaa ", userData);
  }, [userData]);
  useEffect(() => {
    axios
      .get("/admin/users/viewall")
      .then((users) => {
        setuserdata([...users.data]);

        // console.log("users.data", users.data);
      })
      .catch((error) => {
        console.log("errors", error);
      });
  }, []);
  const handleEdit = (id) => {
    setid(id);
    // console.log("Edit user id", id);
    setnav(true);
  };
  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios.delete(`/admin/users/delete/${id}`).then((deleteduser) => {
              console.log("Deleted User", deleteduser);
            });

            setuserdata((data) => {
              return data.filter((user) => user._id !== id);
            });
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <>
    {
      userData.length? <Container fluid>
      <Row>
        <Col md="12">
          <Card className="card-plain table-plain-bg">
            <Card.Header className="d-flex justify-content-between">
              <Card.Title as="h4">Users</Card.Title>
              <Link to="/admin/createUser">
                <button className="btn category_btn">Add User</button>
              </Link>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover">
                <thead>
                  <tr>
                    <th className="border-0">#</th>
                    <th className="border-0">First Name</th>
                    <th className="border-0">Last Name</th>
                    <th className="border-0">Email</th>
                    <th className="border-0">Phone</th>
                    <th className="border-0">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                       <td>{user.phone}</td>
                        <td>
                          {nav && <Navigate to={`/admin/edituser/${id}`} />}
                          <button
                            onClick={() => handleEdit(user._id)}
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
                            onClick={() => handleDelete(user._id)}
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
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>:
    
    <div class="loader"></div>
}
      
    </>
  );
}

export default ViewUsers;
