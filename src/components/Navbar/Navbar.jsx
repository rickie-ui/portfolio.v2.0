import { NavLink, useMatch } from "react-router-dom";

const Navbar = ({ to, children }) => {
  const match = useMatch(to);
  const isActive = !!match;

  return (
    <NavLink
      to={to}
      className={`py-2 transition-all hover:text-third ${
        isActive ? "text-third" : ""
      }`}
    >
      {children}
    </NavLink>
  );
};

export default Navbar;
