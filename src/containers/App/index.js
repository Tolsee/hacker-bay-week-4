// @flow

import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import styled from 'styled-components';
import Layout from 'components/App/Layout';
import Login from 'containers/Login';
import Signup from 'containers/Signup';
import { Authenticated, UnAuthenticated } from 'components/common/Authentication';

const Home = styled.div`
  font-size: 20px;
`;

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Authenticated exact path='/' render={() => <Home>Home</Home>} />
          <UnAuthenticated path='/login' component={Login}/>
          <UnAuthenticated path='/signup' component={Signup}/>
        </Switch>
      </Layout>
    );
  }
}
