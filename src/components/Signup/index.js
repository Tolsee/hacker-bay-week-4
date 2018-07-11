// @flow

import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';

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

const SignupButton = styled(Button)`
  width: 100%;
`;

type Props = {

};

const Signup = (props: Props) => {
  const { handleSubmit, pristine, submitting, signupFormData: { error }} = props;
  return (
    <React.Fragment>
      <Heading>Signup</Heading>
      <Heading>{error}</Heading>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Field
            name="email"
            component={ ({input: { value, onChange }}) => (
              <Input
                placeholder="Enter your email"
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                // suffix={suffix}
                value={value}
                onChange={onChange}
                // ref={node => this.userNameInput = node}
              />
            )}/>
        </FormItem>
        <FormItem>
          <Field
            name="password"
            component={ ({ input: { value, onChange }}) => (
              <Input
                placeholder="Enter your password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                // suffix={suffix}
                type="password"
                value={value}
                onChange={onChange}
                // ref={node => this.userNameInput = node}
              />
            )}/>
        </FormItem>
        <FormItem>
          <SignupButton type="primary" htmlType="submit" disabled={pristine || submitting}>
            Singup
          </SignupButton>
          Already have an account <a href="/login">Login</a>
        </FormItem>
      </form>
    </React.Fragment>
  )
};

export default reduxForm({
  form: 'signup-form'
})(Signup);

