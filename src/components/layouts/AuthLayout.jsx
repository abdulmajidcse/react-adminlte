/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "./../auth/Navbar";
import Sidebar from "./../auth/Sidebar";
import $ from "jquery";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./../auth/Footer";
import "./../../assets/plugins/fontawesome-free/css/all.min.css";
import "./../../assets/dist/css/adminlte.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../../assets/dist/js/adminlte.min.js";

export default function AuthLayout() {
  useEffect(() => {
    $(function () {
      $("body").removeAttr("class");
      $("body").addClass("hold-transition sidebar-mini layout-fixed");

      // when sidebar menu click, automatically hide sidebar for overlay display
      $(".sidebar-link").click(function () {
        $("#sidebar-overlay:visible").click();
      });
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
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
