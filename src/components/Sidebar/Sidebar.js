import React, { Component, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";

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
        {/* <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
          </a>
          <a className="simple-text ps-3" href="#" style={{ "text-decoration": "none" }}>
            Admin Panel
          </a>
        </div> */}
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
