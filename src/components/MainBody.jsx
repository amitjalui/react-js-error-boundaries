import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "../ErrorBoundary";

const MainBody = () => {
  return (
    <div className="main-body">
      <h2>Welcome to the main content</h2>
      <p>This is a simple, responsive layout built with React!</p>

      {/* <ErrorBoundary fallback={<>Something went wrong. <br/> Please contact support at help@mail.com for assistance.</>}> */}
        <BuggyCounter />
      {/* </ErrorBoundary> */}
    </div>
  );
};

export default MainBody;
