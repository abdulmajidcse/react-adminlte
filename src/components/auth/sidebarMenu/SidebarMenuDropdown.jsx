import { useState } from "react";

const SidebarMenuDropdown = ({ icon, text, isActive, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
          </p>
        </a>
        <ul className="nav nav-treeview">{children}</ul>
      </li>
    </>
  );
};

export default SidebarMenuDropdown;
