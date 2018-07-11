import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from 'components/Login';

import { login } from 'actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data))
});

type Props = {
  signup: Function
};

class LoginContainer extends Component<Props> {
  login = (values) => this.props.login(values);

  render() {
    return (
      <Login {...this.props} onSubmit={this.login}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);