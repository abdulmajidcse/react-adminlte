import SidebarMenuDropdown from "./SidebarMenuDropdown";
import SidebarMenuLink from "./SidebarMenuLink";
import { useLocation } from "react-router-dom";

export default function SidebarMenuList() {
  const { pathname } = useLocation();

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

          <SidebarMenuLink
            to="/auth/blank"
            text="Blank Page"
            icon="fas fa-copy"
          />

          <SidebarMenuDropdown
            isActive={!pathname.search("/auth/mailbox")}
            icon="far fa-envelope"
            text="Mailbox"
          >
            <SidebarMenuLink to="/auth/mailbox" text="Inbox" />
            <SidebarMenuLink to="/auth/mailbox/compose" text="Compose" />
            <SidebarMenuLink to="/auth/mailbox/read" text="Read" />
          </SidebarMenuDropdown>

          <SidebarMenuDropdown
            isActive={!pathname.search("/auth/example-pages")}
            icon="fas fa-book"
            text="Pages"
            badge={<span className="badge badge-info right">10</span>}
          >
            <SidebarMenuLink to="/auth/example-pages/invoice" text="Invoice" />
            <SidebarMenuLink to="/auth/example-pages/profile" text="Profile" />
            <SidebarMenuLink
              to="/auth/example-pages/e-commerce"
              text="E-commerce"
            />
            <SidebarMenuDropdown
              isActive={!pathname.search("/auth/example-pages/projects")}
              text="Project"
            >
              <SidebarMenuLink
                to="/auth/example-pages/projects"
                text="Project List"
                icon="far fa-dot-circle"
              />

              <SidebarMenuLink
                to="/auth/example-pages/projects/add"
                text="Project Add"
                icon="far fa-dot-circle"
              />
            </SidebarMenuDropdown>
          </SidebarMenuDropdown>

          <li className="nav-header">MULTI LEVEL EXAMPLE</li>

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

          <li className="nav-header">LABELS</li>

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
