/* eslint-disable jsx-a11y/anchor-is-valid */
import $ from "jquery";
import SidebarMenuDropdown from "./sidebarMenu/SidebarMenuDropdown";
import SidebarMenuLink from "./sidebarMenu/SidebarMenuLink";
import adminLteLogo from "./../assets/dist/img/AdminLTELogo.png";
import userImage from "./../assets/dist/img/user2-160x160.jpg";

export default function Sidebar() {
  $(function () {
    // when sidebar menu click, automatically hide sidebar for overlay display
    $(".sidebar-link").click(function () {
      $("#sidebar-overlay:visible").click();
    });
  });

  return (
    <>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src={adminLteLogo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
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

          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column">
              <SidebarMenuLink
                to="/"
                text="Dashboard"
                icon="fas fa-tachometer-alt"
              />
              <SidebarMenuDropdown
                icon="fas fa-tachometer-alt"
                text="Starter Pages"
              >
                <SidebarMenuLink to="/active-page" text="Active Page" />

                <SidebarMenuLink to="/inactive-page" text="Inactive Page" />
              </SidebarMenuDropdown>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
}
