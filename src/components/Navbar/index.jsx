import { Link } from "react-router-dom";

const Navbar = () => {
  const username = "Anas Adham";
  return (
    <div className="m-3 flex justify-between navbar">
      <div className="navigation-menu space-x-3">
        <a>InternShop</a>
        <Link to="/">Homepage</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="username"> {username}</div>
    </div>
  );
};

export default Navbar;
