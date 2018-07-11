// @flow

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import Layout from 'components/App/Layout';
import Login from 'containers/Login';
import Signup from 'containers/Signup';

const Home = styled.div`
  font-size: 20px;
`;

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={() => <Home>Home</Home>}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </Switch>
      </Layout>
    );
  }
}
