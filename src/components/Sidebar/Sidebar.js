import React, { Component, useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";

import { ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import logo from "assets/img/reactlogo.png";
import { DropdownItem } from "reactstrap";
import SubMenu from "./SubMenu";
function Sidebar({ color, image, routes }) {
  const location = useLocation();

  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          {/* <Link
            to="/admin/dashboard"
            className="simple-text logo-mini mx-1"
          >
          </Link> */}
          <Link className="simple-text ps-3" to="/admin/dashboard" style={{ "text-decoration": "none" }}>
           Chat Bot
          </Link>
        </div>
        {/* {console.log(routes)} */}
        <Nav>
          {routes.map((prop, key) => {
            return <SubMenu prop={prop} key={key} />
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
