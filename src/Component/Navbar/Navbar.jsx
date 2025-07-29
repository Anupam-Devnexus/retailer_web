<<<<<<< HEAD
import React, { useState } from "react";
import { useSidebar } from "./SidebarContext";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaCheckCircle,
  FaComments,
  FaChartLine,
  FaFileAlt,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaUserTie,
  FaUserFriends,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import Data from "../../DataStore/DataStore.json";

const navItems = [
  {
    label: "Dashboard",
    icon: <FaTachometerAlt />,
    route: "/dashboard",
  },
  {
    label: "User Management",
    icon: <FaUsers />,
    subMenu: [
      { label: "Retailers", route: "/users/retailers", icon: <FaUserTie /> },
      { label: "Customers", route: "/users/customers", icon: <FaUserFriends /> },
    ],
  },
  {
    label: "Product Moderation",
    icon: <FaBoxOpen />,
    subMenu: [
      { label: "All Products", route: "/products", icon: <FaBoxOpen /> },
      { label: "Pending Approvals", route: "/products/pending", icon: <FaClock /> },
    ],
  },
  {
    label: "Approvals",
    icon: <FaCheckCircle />,
    subMenu: [
      { label: "Retailer Approvals", route: "/approvals/retailers", icon: <FaUserTie /> },
      { label: "Customer Approvals", route: "/approvals/customer", icon: <FaBoxOpen /> },
    ],
  },
  {
    label: "Messages",
    icon: <FaComments />,
    route: "/messages",
  },
  {
    label: "Reports & Feedback",
    icon: <FaFileAlt />,
    route: "/reports",
  },
  {
    label: "Analytics",
    icon: <FaChartLine />,
    route: "/analytics",
  },
  {
    label: "Commission Settings",
    icon: <FaMoneyBillWave />,
    route: "/settings/commission",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { collapsed, toggleCollapse } = useSidebar();

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const isSubActive = (subMenu) =>
    subMenu?.some((item) => location.pathname.startsWith(item.route));

  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-[var(--secondary-bg)] border-r border-[var(--border)] transition-all duration-300 flex flex-col ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Profile & Collapse Toggle */}
      <div
  className={`flex ${
    collapsed ? "flex-col items-center gap-2" : "flex-row justify-between"
  } items-center p-4 border-b border-[var(--border)]`}
>
  <div className={`flex items-center gap-4 ${collapsed ? "justify-center" : ""}`}>
    <img
      src={Data.admins?.[0].avatar}
      alt="Admin"
      className="w-10 h-10 rounded-full"
    />
    {!collapsed && (
      <div className="text-sm">
        <p className="font-semibold text-[var(--primary-text)]">
          {Data.admins?.[0].name}
        </p>
        <p className="text-xs text-[var(--secondary-text)]">
          {Data.admins?.[0].email}
        </p>
      </div>
    )}
  </div>

  <button
    onClick={() => toggleCollapse(!collapsed)}
    className="text-[var(--primary-text)] cursor-pointer hover:text-[var(--accent)] mt-2 md:mt-0"
  >
    {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
  </button>
</div>


      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {navItems.map((item, idx) => {
          const isActiveParent = activeDropdown === item.label || isSubActive(item.subMenu);
          return (
            <div key={idx}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md ${
                      isActiveParent
                        ? "bg-[var(--accent)] text-white"
                        : "text-[var(--primary-text)] hover:bg-[var(--accent)] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {!collapsed && item.label}
                    </span>
                    {!collapsed &&
                      (isActiveParent ? (
                        <CiCircleChevUp className="text-lg" />
                      ) : (
                        <CiCircleChevDown className="text-lg" />
                      ))}
                  </button>
                  {!collapsed && isActiveParent && (
                    <div className="ml-7 mt-1 space-y-1">
                      {item.subMenu.map((sub, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={sub.route}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition ${
                              isActive
                                ? "bg-[var(--accent-dark)] text-white"
                                : "text-[var(--secondary-text)] hover:bg-[var(--accent)] hover:text-white"
                            }`
                          }
                        >
                          {sub.icon} {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                      isActive
                        ? "bg-[var(--accent-dark)] text-white"
                        : "text-[var(--primary-text)] hover:bg-[var(--accent)] hover:text-white"
                    }`
                  }
                >
                  {item.icon} {!collapsed && item.label}
                </NavLink>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-[var(--border)]">
        <NavLink
          to="/logout"
          className="flex items-center gap-2 px-3 py-2 w-full rounded-md text-[var(--danger)] hover:bg-red-100"
        >
          <FaSignOutAlt />
          {!collapsed && "Logout"}
        </NavLink>
      </div>
    </aside>
  );
}
=======
import React, { useState } from "react";
import { useSidebar } from "./SidebarContext";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaCheckCircle,
  FaComments,
  FaChartLine,
  FaFileAlt,
  FaMoneyBillWave,
  FaSignOutAlt,
  FaUserTie,
  FaUserFriends,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import Data from "../../DataStore/DataStore.json";

const navItems = [
  {
    label: "Dashboard",
    icon: <FaTachometerAlt />,
    route: "/dashboard",
  },
  {
    label: "User Management",
    icon: <FaUsers />,
    subMenu: [
      { label: "Retailers", route: "/users/retailers", icon: <FaUserTie /> },
      { label: "Customers", route: "/users/customers", icon: <FaUserFriends /> },
    ],
  },
  {
    label: "Product Moderation",
    icon: <FaBoxOpen />,
    subMenu: [
      { label: "All Products", route: "/products", icon: <FaBoxOpen /> },
      { label: "Pending Approvals", route: "/products/pending", icon: <FaClock /> },
    ],
  },
  {
    label: "Approvals",
    icon: <FaCheckCircle />,
    subMenu: [
      { label: "Retailer Approvals", route: "/approvals/retailers", icon: <FaUserTie /> },
      { label: "Customer Approvals", route: "/approvals/customer", icon: <FaBoxOpen /> },
    ],
  },
  {
    label: "Messages",
    icon: <FaComments />,
    route: "/messages",
  },
  {
    label: "Reports & Feedback",
    icon: <FaFileAlt />,
    route: "/reports",
  },
  {
    label: "Analytics",
    icon: <FaChartLine />,
    route: "/analytics",
  },
  {
    label: "Commission Settings",
    icon: <FaMoneyBillWave />,
    route: "/settings/commission",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { collapsed, toggleCollapse } = useSidebar();

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const isSubActive = (subMenu) =>
    subMenu?.some((item) => location.pathname.startsWith(item.route));

  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-[var(--secondary-bg)] border-r border-[var(--border)] transition-all duration-300 flex flex-col ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {/* Profile & Collapse Toggle */}
      <div
  className={`flex ${
    collapsed ? "flex-col items-center gap-2" : "flex-row justify-between"
  } items-center p-4 border-b border-[var(--border)]`}
>
  <div className={`flex items-center gap-4 ${collapsed ? "justify-center" : ""}`}>
    <img
      src={Data.admins?.[0].avatar}
      alt="Admin"
      className="w-10 h-10 rounded-full"
    />
    {!collapsed && (
      <div className="text-sm">
        <p className="font-semibold text-[var(--primary-text)]">
          {Data.admins?.[0].name}
        </p>
        <p className="text-xs text-[var(--secondary-text)]">
          {Data.admins?.[0].email}
        </p>
      </div>
    )}
  </div>

  <button
    onClick={() => toggleCollapse(!collapsed)}
    className="text-[var(--primary-text)] cursor-pointer hover:text-[var(--accent)] mt-2 md:mt-0"
  >
    {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
  </button>
</div>


      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {navItems.map((item, idx) => {
          const isActiveParent = activeDropdown === item.label || isSubActive(item.subMenu);
          return (
            <div key={idx}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md ${
                      isActiveParent
                        ? "bg-[var(--accent)] text-white"
                        : "text-[var(--primary-text)] hover:bg-[var(--accent)] hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon}
                      {!collapsed && item.label}
                    </span>
                    {!collapsed &&
                      (isActiveParent ? (
                        <CiCircleChevUp className="text-lg" />
                      ) : (
                        <CiCircleChevDown className="text-lg" />
                      ))}
                  </button>
                  {!collapsed && isActiveParent && (
                    <div className="ml-7 mt-1 space-y-1">
                      {item.subMenu.map((sub, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={sub.route}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition ${
                              isActive
                                ? "bg-[var(--accent-dark)] text-white"
                                : "text-[var(--secondary-text)] hover:bg-[var(--accent)] hover:text-white"
                            }`
                          }
                        >
                          {sub.icon} {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2 rounded-md transition ${
                      isActive
                        ? "bg-[var(--accent-dark)] text-white"
                        : "text-[var(--primary-text)] hover:bg-[var(--accent)] hover:text-white"
                    }`
                  }
                >
                  {item.icon} {!collapsed && item.label}
                </NavLink>
              )}
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-[var(--border)]">
        <NavLink
          to="/logout"
          className="flex items-center gap-2 px-3 py-2 w-full rounded-md text-[var(--danger)] hover:bg-red-100"
        >
          <FaSignOutAlt />
          {!collapsed && "Logout"}
        </NavLink>
      </div>
    </aside>
  );
}
>>>>>>> master
