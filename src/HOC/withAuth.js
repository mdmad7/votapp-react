import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../action/login';

export default AuthComponent => {
  class AuthWrapped extends Component {
    constructor() {
      super();
      this.state = {
        user_token: null,
      };
    }

    componentDidMount() {
      console.log(this.props);
      const token = localStorage.getItem('id_token');
      if (!this.props.isAuthenticated) {
        this.props.history.replace('/admin');
      } else {
        try {
          this.setState({
            user_token: token,
          });
        } catch (err) {
          this.props.logoutUser();
          this.props.history.replace('/admin');
        }
      }
    }

    render() {
      if (this.props.isAuthenticated) {
        return (
          <AuthComponent
            history={this.props.history}
            user={this.state.user_token}
          />
        );
      }
      return null;
    }
  }

  const mapStateToProps = state => {
    return {
      isFetching: state.loginData.isFetching,
      isAuthenticated: state.loginData.isAuthenticated,
      token: state.loginData.token,
      user: state.loginData.user,
    };
  };

  const mapStateToDispatch = dispatch => {
    return {
      logoutUser: () => dispatch(logoutUser()),
    };
  };

  return connect(mapStateToProps, mapStateToDispatch)(AuthWrapped);
};
