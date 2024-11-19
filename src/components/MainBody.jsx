import BuggyCounter from "./BuggyCounter";
// import ErrorBoundary from "../ErrorBoundary";

const MainBody = () => {
  return (
    <div className="main-body">
      <h2>Welcome to the main content</h2>
      <p>This is a simple, responsive layout built with React!</p>

      <BuggyCounter />
    </div>
  );
};

export default MainBody;
