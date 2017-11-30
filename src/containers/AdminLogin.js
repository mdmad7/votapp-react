import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { loginUser } from '../action/login';

import {
  // Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
} from 'reactstrap';

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const creds = { email: this.state.email, password: this.state.password };
    await this.props.loginUser(creds);
    this.setState({
      email: '',
      password: '',
    });
    this.props.isAuthenticated
      ? this.props.history.replace('/dashboard')
      : null;
    console.log(this.props.errorMessage);
  };

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.history.replace('/dashboard');
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="mdmad7@gmail.com"
              value={this.state.email ? this.state.email : ''}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="********"
              value={this.state.password ? this.state.password : ''}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.loginData.isFetching,
    isAuthenticated: state.loginData.isAuthenticated,
    token: state.loginData.token,
    errorMessage: state.loginData.errorMessage,
  };
};

const mapStateToDispatch = dispatch => {
  return {
    loginUser: creds => dispatch(loginUser(creds)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(AdminLogin);
