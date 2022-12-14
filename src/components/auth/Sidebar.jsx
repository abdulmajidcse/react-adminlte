/* eslint-disable jsx-a11y/anchor-is-valid */
import adminLteLogo from "./../../assets/dist/img/AdminLTELogo.png";
import userImage from "./../../assets/dist/img/user2-160x160.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { themeTypes } from "./../../features/theme/themeSlice";
import SidebarMenuList from "./sidebarMenu/SidebarMenuList";

export default function Sidebar() {
  const theme = useSelector((state) => state.theme);

  return (
    <>
      {/* Main Sidebar Container */}
      <aside
        className={`main-sidebar elevation-4 ${
          theme.mode === themeTypes.dark
            ? "sidebar-dark-primary"
            : "sidebar-light-indigo"
        }`}
      >
        {/* Brand Logo */}
        <Link to="/auth" className="brand-link">
          <img
            src={adminLteLogo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={userImage}
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>

          <SidebarMenuList />
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
}
