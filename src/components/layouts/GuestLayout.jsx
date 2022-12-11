import $ from "jquery";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./../../assets/plugins/fontawesome-free/css/all.min.css";
import "./../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "./../../assets/dist/css/adminlte.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./../../assets/dist/js/adminlte.min.js";
import { useSelector } from "react-redux";
import { themeTypes } from "./../../features/theme/themeSlice";
import { useLocation } from "react-router-dom";
import Theme from "../../features/theme/Theme";

export default function AuthLayout() {
  const theme = useSelector((state) => state.theme);
  const { pathname } = useLocation();

  const isRegisterPath = !pathname.search("/auth/register");

  useEffect(() => {
    $(function () {
      $("body").removeAttr("class");
      $("body").addClass(`${isRegisterPath ? "register-page" : "login-page"}`);

      if (theme.mode === themeTypes.dark) {
        $("body").addClass("dark-mode");
      } else {
        $("body").removeClass("dark-mode");
      }
    });
  }, [theme, isRegisterPath]);

  return (
    <>
      <div className={`${isRegisterPath ? "register" : "login"}-box`}>
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <Link to="/" className="h1">
              <b>Admin</b>LTE
            </Link>
            <Theme style={{ position: "fixed", top: "20px", right: "30px" }} />
          </div>
          <div className="card-body">
            <Outlet />
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
      {/* /.login-box */}
    </>
  );
}
