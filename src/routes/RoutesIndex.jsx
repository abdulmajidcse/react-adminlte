import { Navigate, Route, Routes } from "react-router-dom";
import Blank from "../pages/Blank";
import Dashboard from "../pages/Dashboard";
import AuthLayout from "./../components/layouts/AuthLayout";

export default function RoutesIndex() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace={true} />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="blank" element={<Blank />} />
        </Route>
      </Routes>
    </>
  );
}
