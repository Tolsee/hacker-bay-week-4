import React, { Component } from 'react';
import { connect } from 'react-redux';

import Signup from 'components/Signup';

import { signup } from 'actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  signup: (data) => dispatch(signup(data))
});

type Props = {
  signup: Function
};

class SignupContainer extends Component<Props> {
  signup = values => {
    console.log(values);
    this.props.signup(values);
  };

  render() {
    console.log('Props: ', this.props);
    return (
      <Signup {...this.props} onSubmit={this.signup}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupContainer);