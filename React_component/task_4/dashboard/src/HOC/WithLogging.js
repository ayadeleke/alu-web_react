import React from 'react';

function withLogging(WrappedComponent) {
  const displayName = getDisplayName(WrappedComponent);

  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${displayName} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${displayName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${displayName})`;

  return WithLogging;
}

function getDisplayName(WrappedComponent) {
  if (WrappedComponent.displayName === undefined) {
    if (WrappedComponent.name === '' || WrappedComponent.name === undefined) {
      return 'Component';
    }
    return WrappedComponent.name;
  }
  return WrappedComponent.displayName;
}

export default withLogging;
