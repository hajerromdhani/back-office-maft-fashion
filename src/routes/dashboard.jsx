import Dashboard from "views/Dashboard/Dashboard";
import AdminProfil from "views/AdminProfil/AdminProfil";
import PostsOfAdmin from "views/Posts/PostsOfAdmin";
import Mafters from "views/Mafters/Mafters";
//import Example from "../components/Modal/Example";
import PostsOfMafters from "views/Mafters/PostsOfMafters";
// import Icons from "views/Icons/Icons";
// import Maps from "views/Maps/Maps";
// import Notifications from "views/Notifications/Notifications";
// import Upgrade from "views/Upgrade/Upgrade";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/admin",
    name: "Admin Profil",
    icon: "pe-7s-user",
    component: AdminProfil
  },
  {
    path: "/PostsOfAdmin",
    name: "Posts Of Admin",
    icon: "pe-7s-note2",
    component: PostsOfAdmin
  },
  {
    path: "/Mafters",
    name: "Mafters",
    icon: "pe-7s-user",
    component: Mafters
  },
  
 { 
   path: "/PostsOfMafters",
   name: "Posts Of Mafters", 
   icon: "pe-7s-note2", 
   component: PostsOfMafters 
  },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  //  {
  //    path: "/addpost",
  //    name: "Add New Post",
  //    icon: "pe-7s-note2",
  //    component:Example
  //  },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade
  // },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
