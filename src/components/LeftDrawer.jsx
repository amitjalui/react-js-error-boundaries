const LeftDrawer = ({ isOpen }) => {
  return (
    <div className={`left-drawer ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default LeftDrawer;
