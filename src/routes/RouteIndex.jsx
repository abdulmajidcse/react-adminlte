import { Outlet, Route, Routes } from "react-router-dom";
import Widgets from "./../pages/auth/Widgets";
import Dashboard from "./../pages/auth/Dashboard";
import AuthLayout from "./../components/layouts/AuthLayout";
import Home from "./../pages/frontend/Home";
import FrontendLayout from "./../components/layouts/FrontendLayout";
import AuthBlank from "../pages/auth/AuthBlank";
import MailBox from "../pages/auth/mailbox/MailBox";
import MailCompose from "../pages/auth/mailbox/MailCompose";
import MailRead from "../pages/auth/mailbox/MailRead";
import Invoice from "../pages/auth/example-page/Invoice";
import Profile from "../pages/auth/example-page/Profile";
import Ecommerce from "../pages/auth/example-page/Ecommerce";
import ProjectList from "./../pages/auth/example-page/project/ProjectList";
import ProjectAdd from "../pages/auth/example-page/project/ProjectAdd";

export default function RouteIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blank" element={<AuthBlank />} />
          <Route path="widgets" element={<Widgets />} />

          <Route path="mailbox" element={<Outlet />}>
            <Route index element={<MailBox />} />
            <Route path="compose" element={<MailCompose />} />
            <Route path="read" element={<MailRead />} />
          </Route>

          <Route path="example-pages" element={<Outlet />}>
            <Route path="invoice" element={<Invoice />} />
            <Route path="profile" element={<Profile />} />
            <Route path="e-commerce" element={<Ecommerce />} />
            <Route path="projects" element={<Outlet />}>
              <Route index element={<ProjectList />} />
              <Route path="add" element={<ProjectAdd />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
