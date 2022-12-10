import SidebarMenuDropdown from "./SidebarMenuDropdown";
import SidebarMenuLink from "./SidebarMenuLink";

export default function SidebarMenuList() {
  return (
    <>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column">
          <SidebarMenuLink
            to="/auth"
            text="Dashboard"
            icon="fas fa-tachometer-alt"
          />

          <SidebarMenuLink
            to="/auth/widgets"
            text="Widgets"
            badge={<span className="right badge badge-danger">New</span>}
            icon="fas fa-th"
          />

          <SidebarMenuDropdown
            icon="fas fa-copy"
            text="Layout Options"
            badge={<span className="badge badge-info right">6</span>}
          >
            <SidebarMenuLink to="/auth/blank" text="Active Page" />

            <SidebarMenuLink to="/" text="Inactive Page" />
          </SidebarMenuDropdown>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </>
  );
}
