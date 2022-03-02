const Navbar = () => {
  const username = "Anas Adham";
  return (
    <div className="m-3 flex justify-between navbar">
      <div className="logo">Shopping-Spree</div>
      <div className="username"> {username}</div>
    </div>
  );
};

export default Navbar;
