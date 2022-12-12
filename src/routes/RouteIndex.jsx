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
import ProjectEdit from "../pages/auth/example-page/project/ProjectEdit";
import ProjectDetail from "../pages/auth/example-page/project/ProjectDetail";
import Contacts from "./../pages/auth/example-page/Contacts";
import FAQ from "../pages/auth/example-page/FAQ";
import ContactUs from "../pages/auth/example-page/ContactUs";
import SimpleSearch from "../pages/auth/search/SimpleSearch";
import SimpleResult from "../pages/auth/search/SimpleResult";
import Enhanced from "../pages/auth/search/Enhanced";
import EnhancedResult from "../pages/auth/search/EnhancedResult";
import GuestLayout from "./../components/layouts/GuestLayout";
import Login from "../pages/guest/Login";
import Register from "../pages/guest/Register";
import ForgotPassword from "../pages/guest/ForgotPassword";
import RecoverPassword from "../pages/guest/RecoverPassword";
import NotFound from "../pages/NotFound";
import ServerError from "../pages/ServerError";
import SimpleTables from "../pages/auth/SimpleTables";

export default function RouteIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="auth" element={<GuestLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="recover-password" element={<RecoverPassword />} />
        </Route>

        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blank" element={<AuthBlank />} />
          <Route path="widgets" element={<Widgets />} />

          <Route path="simple-tables" element={<SimpleTables />} />

          <Route path="404" element={<NotFound />} />
          <Route path="500" element={<ServerError />} />

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
              <Route path="edit" element={<ProjectEdit />} />
              <Route path="detail" element={<ProjectDetail />} />
            </Route>

            <Route path="contacts" element={<Contacts />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>

          <Route path="search" element={<Outlet />}>
            <Route path="simple-search" element={<SimpleSearch />} />
            <Route path="simple-result" element={<SimpleResult />} />
            <Route path="enhanced" element={<Enhanced />} />
            <Route path="enhanced-result" element={<EnhancedResult />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound isNotFound />} />
      </Routes>
    </>
  );
}
