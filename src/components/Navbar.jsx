const Navbar = ({ toggleDrawer }) => {
  return (
    <nav className="navbar">
      <h1>My Simple App</h1>
      <button className="drawer-toggle" onClick={toggleDrawer}>Toggle Drawer</button>
    </nav>
  );
};

export default Navbar;
