import { useState } from "react";

const SidebarMenuDropdown = ({
  icon = "far fa-circle",
  text,
  badge = "",
  isActive,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen((state) => !state);
  };

  return (
    <>
      <li className={`nav-item ${isMenuOpen && "menu-open"}`}>
        <a
          className={`nav-link sidebar-dropdown ${isActive && "active"}`}
          href="/#"
          onClick={dropdownMenu}
        >
          <i className={`nav-icon ${icon}`} />
          <p>
            {text}
            <i className="fas fa-angle-left right" />
            {badge}
          </p>
        </a>
        <ul className="nav nav-treeview">{children}</ul>
      </li>
    </>
  );
};

export default SidebarMenuDropdown;
