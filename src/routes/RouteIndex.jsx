import { Route, Routes } from "react-router-dom";
import Widgets from "./../pages/auth/Widgets";
import Dashboard from "./../pages/auth/Dashboard";
import AuthLayout from "./../components/layouts/AuthLayout";
import Home from "./../pages/frontend/Home";
import FrontendLayout from "./../components/layouts/FrontendLayout";

export default function RouteIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="widgets" element={<Widgets />} />
        </Route>
      </Routes>
    </>
  );
}
