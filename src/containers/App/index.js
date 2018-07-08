// @flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const AppContainer = styled.div``;

class App extends Component {

  componentDidMount() {
    // call default function to display redux operation
    // this.props.defaultFunction();
  }

  render() {
    return (
      <AppContainer>
        App with state
      </AppContainer>
    );
  }
}

// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { })(App);
