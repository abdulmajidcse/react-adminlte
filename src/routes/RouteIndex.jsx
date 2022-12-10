import { Navigate, Route, Routes } from "react-router-dom";
import Widgets from "./../pages/Widgets";
import Dashboard from "./../pages/Dashboard";
import AuthLayout from "./../components/layouts/AuthLayout";

export default function RouteIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace={true} />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="widgets" element={<Widgets />} />
        </Route>
      </Routes>
    </>
  );
}
