import React from 'react';

/**
 * @Watchman (ErrorBoundary):
 *    - Constantly monitors the building for any accidents or disturbances.
 *    - Responsibility: If something goes wrong (e.g., an accident on the 3rd floor), the watchman detects it and alerts the response team (error boundary).
 * @getDerivedStateFromError (Incident Alarm system):
 *    - When the watchman detects an accident, the incident alarm system is triggered.
 *    - Responsibility: Updates the status board (state) of the building to indicate that there is an issue on a specific floor.
 *    - Does not fix the problem, just flags it for others to see (like setting hasError: true in the state).
 * @componentDidCatch (Investigation and Reporting Team):
 *    - Once the alarm is triggered, the team investigates the incident, gathers information (error logs), and optionally informs the building's owner (backend/server).
 *    - Responsibility: Logs details of the incident and potentially takes follow-up actions like calling the fire department (external API) or logging the issue for future improvements.
 * 
 */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // runs at the beginning
  static getDerivedStateFromError(error) {
    console.log('Hello error derived')
    return { hasError: true };
  }

  // run at the end when get derive return something
  componentDidCatch(error, info) {
    console.log('Hello error did catch', info);

    /**
     * 1. Auto refresh page code
     * 2. Send UI crash log to backend
     * 3. etc...
     */
  }

  // fall back UI
  render() {
    const { fallback, children } = this.props;
  
    if (this.state.hasError) {
      const message = fallback || "Something went wrong. Please try again later";
  
      return fallback ? (
        <h5>{message}</h5>
      ) : (
        <h2 style={{ textAlign: "center" }}>{message}</h2>
      );
    }
  
    return children;
  }
}

export default ErrorBoundary;