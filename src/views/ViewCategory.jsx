import React, { useEffect, useState } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { Navigate } from "react-router-dom";
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
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
function ViewCategory() {
  const [id, setid] = useState();
  const [categoryData, setcategorydata] = useState([]);
  const [nav, setnav] = useState(false);
  // useEffect(() => {
  //   console.log("categoryData updated", categoryData);
  // }, [categoryData]);
  useEffect(() => {
    axios
      .get("/admin/category/viewall")
      .then((category) => {
        setcategorydata([...category.data]);

        // console.log("users.data", users.data);
      })
      .catch((error) => {
        console.log("errors", error);
      });
  }, []);
  const handleEdit = (id) => {
    setid(id);
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
            axios
              .delete(`/admin/category/delete/${id}`)
              .then((deletedcatgeory) => {
                console.log("Deleted User", deletedcatgeory);
              });

            setcategorydata((data) => {
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
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header className="d-flex justify-content-between">
                <Card.Title as="h4">Categories</Card.Title>
                <Link to="/admin/category">
                  <button className="btn category_btn">Add Category</button>
                </Link>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">#</th>
                      <th className="border-0">Image</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Description</th>
                      <th className="border-0">Status</th>
                      <th className="border-0">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoryData.map((category, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              src={
                                process.env.REACT_APP_imageurl + category.photo
                              }
                              style={{ width: "40px", height: "40px" }}
                              alt=""
                            />
                          </td>
                          <td>{category.name}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: category.description,
                            }}
                          ></td>
                          <td>{category.status.toString()}</td>

                          <td>
                            {nav && (
                              <Navigate to={`/admin/editcategory/${id}`} />
                            )}
                            <button
                              onClick={() => {
                                handleEdit(category._id);
                              }}
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
                              onClick={() => {
                                handleDelete(category._id);
                              }}
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
      </Container>
    </>
  );
}

export default ViewCategory;
