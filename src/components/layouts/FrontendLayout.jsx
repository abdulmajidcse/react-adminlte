/* eslint-disable jsx-a11y/anchor-is-valid */
import $ from "jquery";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./../auth/Footer";
import "./../../assets/plugins/fontawesome-free/css/all.min.css";
import "./../../assets/dist/css/adminlte.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../../assets/dist/js/adminlte.min.js";
import FrontendNavbar from "../frontend/FrontendNavbar";
import { useSelector } from "react-redux";
import { themeTypes } from "./../../features/theme/themeSlice";

export default function FrontendLayout() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    $(function () {
      $("body").removeAttr("class");
      $("body").addClass("hold-transition layout-top-nav");

      if (theme.mode === themeTypes.dark) {
        $("body").addClass("dark-mode");
      } else {
        $("body").removeClass("dark-mode");
      }
    });
  }, [theme]);

  return (
    <>
      <div className="wrapper">
        <FrontendNavbar />
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
