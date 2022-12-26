/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/AdminProfile.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import Icons from "views/Icons.js";
import CreateCategory from "views/CreateCategory";
import ViewCategory from "views/ViewCategory";
import ViewProducts from "views/ViewProducts";
import CreateProducts from "./views/CreateProducts";
import NewNumber from "./views/Number/NewNumber";
import ListNumber from "./views/Number/ListNumber";
import EditUser from "./views/Number/EditUser";
import EditCategory from "views/EditCategory";
import NewTemplate from "views/Template/NewTemplate";
import ListTemplate from "views/Template/ListTemplate";
import Login from "views/Login";
import Setting from "views/Setting";
const allRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-tachometer-alt",
    component: Dashboard,
    layout: "/admin",
  },
  {
    // path: "/user",
    name: "Number",
    icon: "fa fa-user",
    // component: ViewCategory,
    // layout: "/admin",
    iconClosed: <i class="fa fa-angle-up"></i>,
    iconOpened: <i class="fa fa-angle-down"></i>,
    subNav: [
      {
        path: "/NewNumber",
        name: "New Number",
        component: NewNumber,
        layout: "/admin",
      
      },
      {
        path: "/ListNumber",
        name: "List Number",
        component: ListNumber,
        layout: "/admin",
       
      },
      {
        path: "/edituser/:id",
        icon: "nc-icon nc-bullet-list-67",
        component: EditUser,
        layout: "/admin",
      },
    ],
  },
  {
    // path: "/Template",
    name: "Template",
    icon: "fa fa-users",
    // component: ViewCategory,
    // layout: "/admin",
    iconClosed: <i class="fa fa-angle-up"></i>,
    iconOpened: <i class="fa fa-angle-down"></i>,
    subNav: [
      {
        path: "/New_Template",
        name: "New Template",
        component: NewTemplate,
        layout: "/admin",
     
      },
      {
        path: "/List_Template",
        name: "List Template",
        component: ListTemplate,
        layout: "/admin",
        
      },
      
    ],
  },
 
  

  {
    path: "/Campaigns",
    name: "Campaigns",
    icon: "fa fa-file",
    component: ViewCategory,
    layout: "/admin",
    iconClosed: <i class="fa fa-angle-up"></i>,
    iconOpened: <i class="fa fa-angle-down"></i>,
    subNav: [
      {
        path: "/New_Campaign",
        name: "New Campaign",
        component: ViewCategory,
        layout: "/admin",
      
      },
      {
        path: "/List_Campaigns",
        name: "List Campaigns",
        component: ViewCategory,
        layout: "/admin",
      
      },
      
    ],
  },
  {
    icon: "far fa-comments",
    name: "Questioner",
    iconClosed: <i class="fa fa-angle-up"></i>,
    iconOpened: <i class="fa fa-angle-down"></i>,
    subNav: [
      {
        path: "/New_Questioner",
        name: "New Questioner",
        component: ViewCategory,
        layout: "/admin",
        
      },
      {
        path: "/List_Questioners",
        name: "List Questioners",
        component: ViewCategory,
        layout: "/admin",
       
      },
    
    ],
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "fa fa-cog",
    component: Setting, //Setting
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login",
    icon: "fa fa-cog",
    component: Login,
    layout: "/admin",
  },
  // {
  //   name: "Website Content",
  //   icon: "fas fa-globe",
  //   iconClosed: <i class="fa fa-angle-up"></i>,
  //   iconOpened: <i class="fa fa-angle-down"></i>,
  //   subNav: [
  //     {
  //       path: "/faq",
  //       name: "FAQ",
  //       icon: "nc-icon nc-chat-round",
  //       component: ViewCategory,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/Testimonials",
  //       name: "Testimonials",
  //       icon: "nc-icon nc-satisfied",
  //       component: ViewCategory,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/HIW",
  //       name: "How it work",
  //       icon: "nc-icon nc-chart-pie-35",
  //       component: ViewCategory,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/slider",
  //       name: "Slider",
  //       icon: "nc-icon nc-chat-round",
  //       component: ViewCategory,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/mail",
  //       name: "Mail Box",
  //       icon: "nc-icon nc-chat-round",
  //       component: ViewCategory,
  //       layout: "/admin",
  //     },
  //   ],
  
  // }, 
  // {
  //   path: "/setting",
  //   name: "Setting",
  //   icon: "fa fa-cog",
  //   component: ViewCategory,
  //   layout: "/admin",
  // },
  

 
]



// const dashboardRoutes = allRoutes .slice(0);
export default allRoutes;