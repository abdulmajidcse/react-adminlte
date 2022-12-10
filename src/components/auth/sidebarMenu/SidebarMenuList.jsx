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
            icon="fas fa-book"
            text="Pages"
            badge={<span className="badge badge-info right">6</span>}
          >
            <SidebarMenuLink to="/" text="Active Page" />

            <SidebarMenuLink to="/" text="Inactive Page" />
          </SidebarMenuDropdown>

          <li class="nav-header">MULTI LEVEL EXAMPLE</li>

          <SidebarMenuLink to="/" text="Level 1" icon="fas fa-circle" />
          <SidebarMenuDropdown icon="fas fa-circle" text="Level 1">
            <SidebarMenuLink to="/" text="Level 2" />

            <SidebarMenuDropdown text="Level 2">
              <SidebarMenuLink to="/" icon="far fa-dot-circle" text="Level 3" />

              <SidebarMenuLink to="/" icon="far fa-dot-circle" text="Level 3" />
            </SidebarMenuDropdown>

            <SidebarMenuLink to="/" text="Level 2" />
          </SidebarMenuDropdown>
          <SidebarMenuLink to="/" text="Level 1" icon="fas fa-circle" />

          <li class="nav-header">LABELS</li>

          <SidebarMenuLink
            to="/"
            text="Important"
            icon="far fa-circle text-danger"
          />
          <SidebarMenuLink
            to="/"
            text="Warning"
            icon="far fa-circle text-warning"
          />
          <SidebarMenuLink
            to="/"
            text="Informational"
            icon="far fa-circle text-info"
          />
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </>
  );
}
