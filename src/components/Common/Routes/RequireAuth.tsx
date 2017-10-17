import * as React from 'react';
import { connect } from 'react-redux';

interface AuthProps {
  isAuthenticated: boolean;
  history: {
    push: (url: string) => void;
  };
}
export default function(ComposedComponent: any) {
  class Authenticate extends React.Component<AuthProps, any> {
    public componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/signin');
      }
    }

    public componentWillUpdate(nextProps: AuthProps) {
      if (!nextProps.isAuthenticated) {
        this.props.history.push('/signin');
      }
    }

    public render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state: any) {
    return {
      isAuthenticated: !!state.user.email
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
