import { NavLink } from "@/db/navLinks";
import { Link, useLocation } from "react-router-dom";

const isMenuActive = (item: NavLink, pathname: string): boolean => {
  if (item.href === pathname) {
    return true;
  }

  return !!item.submenu?.some((child) =>
    isMenuActive(child, pathname)
  );
};

interface MenuItemProps {
  item: NavLink;
  isSubmenu?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isSubmenu = false }) => {
  const { pathname } = useLocation();
  const isActive = isMenuActive(item, pathname);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <li className={`${isSubmenu ? "" : "nav-item"} ${hasSubmenu ? "dropdown" : ""}`}>
      <Link
        to={item.href}
        className={`${isSubmenu ? "dropdown-item" : "nav-link"} ${isActive ? "active" : ""} ${hasSubmenu ? "dropdown-toggle" : ""}`}
        {...(hasSubmenu ? { "data-bs-toggle": "dropdown", "aria-expanded": "false" } : {})}
      >
        {item.title}
      </Link>
      {hasSubmenu && (
        <ul className="dropdown-menu">
          {item.submenu?.map((subItem, index) => (
            <MenuItem key={index} item={subItem} isSubmenu={true} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
