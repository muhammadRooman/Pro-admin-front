import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ prop, _key }) => {

  const [SubNav, setSubNav] = useState(false);
  const toggleSubNav = () => {
    setSubNav(!SubNav);
  };
  return (
    <li key={`i-${_key}`}>
       {prop?.subNav?.length > 0 ?
       <div
       className="nav-link"
       activeClassName="active"
       onClick={toggleSubNav}
       >
        <i className={prop.icon} />
       <p>{prop.name}</p>
       {prop.subNav && SubNav
         ? prop.iconClosed
         : prop.subNav
         ? prop.iconOpened
         : null}
       </div>
       : (prop.name !== "Profile") &&
       <Link
       to={ prop.layout + prop.path}
       className="nav-link"
       activeClassName="active"
       key={`k-${_key}`}
     >
       <i className={prop.icon} />
       <p>{prop.name}</p>
     </Link>
    } 
      {prop.subNav ? (
        <div className="subNav-menu">
          {SubNav &&
            prop.subNav.map((item, key) => (
              <Link
                to={item.layout + item.path}
                activeClassName="active"
                key={key}
              >
                <p>{item.name}</p>
              </Link>
            ))}
        </div>
      ) : null}
    </li>
  );
};

export default SubMenu;
