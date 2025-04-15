// /admin/adminjsSetup.js
import AdminJS, { ComponentLoader } from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";
import { Resources } from "./resource.js";
import { componentLoader, Components } from "./componentsLoader.js";
AdminJS.registerAdapter({ Database, Resource });


const logo='/uploads/FINA TBC_LOGO_2023-02.png';

const admin = new AdminJS({
  rootPath: "/admin",
  branding: {
    companyName: 'ThunderBolts', 
    logo: logo, 
  },
  componentLoader,
  dashboard: {
    component: Components.dashboard,
  },
  resources: Resources,
});

admin.watch();

export default admin;
