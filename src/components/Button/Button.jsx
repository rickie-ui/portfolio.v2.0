import { Link } from "react-router-dom";

const Button = ({ children, to, className }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default Button;
