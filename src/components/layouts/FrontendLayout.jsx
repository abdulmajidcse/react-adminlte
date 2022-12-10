/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./../auth/Navbar";
import $ from "jquery";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./../auth/Footer";
import "./../../assets/plugins/fontawesome-free/css/all.min.css";
import "./../../assets/dist/css/adminlte.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../../assets/dist/js/adminlte.min.js";

export default function FrontendLayout() {
  useEffect(() => {
    $(function () {
      $("body").removeClass("sidebar-mini layout-fixed"); // only use for AuthLayout component if exist it
      $("body").addClass("hold-transition layout-top-nav");
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Navbar />
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <Outlet />
        </div>
        {/* /.content-wrapper */}
        <Footer />
      </div>
      {/* ./wrapper */}
    </>
  );
}
