import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // run at the beginning
  static getDerivedStateFromError(error) {
    console.log('Hello error derived')
    return { hasError: true };
  }

  // run at the end when get derive return something
  componentDidCatch(error, info) {
    console.log('Hello error did catch', info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;