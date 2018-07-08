// @flow

import React from 'react';
import styled from 'styled-components';

import {
  Form,
  Button,
  Input,
  Icon
} from 'antd';

const { Item: FormItem } = Form;

const Heading = styled.h2`
  width: 100%;
  text-align: center;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <React.Fragment>
        <Heading>Signup</Heading>
        <FormItem>
          <Input
            placeholder="Enter your email"
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => this.userNameInput = node}
          />
        </FormItem>
        <FormItem>
          <Input
            placeholder="Enter your password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => this.userNameInput = node}
          />
        </FormItem>
        <FormItem>
          <LoginButton type="primary" htmlType="submit" className="login-form-button">
           Singup
          </LoginButton>
          Already have an account <a href="/login">Login</a>
        </FormItem>
      </React.Fragment>
    );
  }
}

