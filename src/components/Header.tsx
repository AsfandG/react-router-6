import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b p-4">
      <ul className="flex items-center gap-4 text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-700" : "text-neutral-500"
              } hover:text-orange-700 font-medium`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-700" : "text-neutral-500"
              } hover:text-orange-700 font-medium`
            }
          >
            User
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
