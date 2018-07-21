// @flow
import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import {
  Form,
  Button,
  Icon
} from 'antd';
import { renderField, Info as FormInfo } from 'components/common/Form';
import { required, minLength, email } from 'utils/validation';

const { Item: FormItem } = Form;
const minLength8 = minLength(8);

const Heading = styled.h2`
  width: 100%;
  text-align: center;
`;

const LoginButton = styled(Button)`
  width: 100%;
`;

type Props = {
  handleSubmit: Function,
  pristine: boolean,
  submitting: boolean,
  loginFormData: { error: string }
};

const Login = (props: Props) => {
  const { handleSubmit, pristine, submitting, loginFormData: { error } } = props;

  return (
    <React.Fragment>
      <Heading>Login</Heading>
      {error && <FormInfo message={error} type="error" />}
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Field
            name="email"
            label="Please enter your email"
            type="text"
            validate={[required, email]}
            component={renderField}
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            fieldTouched={!pristine}/>
        </FormItem>
        <FormItem>
          <Field
            name="password"
            label="Please enter your password"
            type="password"
            validate={[required, minLength8]}
            component={renderField}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            fieldTouched={!pristine}/>
        </FormItem>
        <FormItem>
          <LoginButton type="primary" htmlType="submit" disabled={pristine || submitting}>
            Log in
          </LoginButton>
          Or <Link to="/signup">register now!</Link>
        </FormItem>
      </form>
    </React.Fragment>
  )
};

export default reduxForm({
  form: 'login-form'
})(Login);

