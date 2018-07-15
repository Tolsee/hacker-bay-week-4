// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AppDecorator from './decorators';
import Login from '../components/Login';
import Signup from '../components/Signup';

storiesOf('Login Form using Redux Form', module)
  .addDecorator(story => <AppDecorator>{story()}</AppDecorator>)
  .add('Normal form', () => <Login loginFormData={{ error: undefined }} onSubmit={action('Submit')}/>)
  .add('User does not exists.', () => <Login loginFormData={{ error: 'User does not exists.' }} onSubmit={action('Submit')}/>)
  .add('Incorrect password.', () => <Login loginFormData={{ error: 'Incorrect password.' }} onSubmit={action('Submit')}/>);

storiesOf('Signup Form using Redux Form', module)
  .addDecorator(story => <AppDecorator>{story()}</AppDecorator>)
  .add('Normal form', () => <Signup signupFormData={{ error: undefined }} onSubmit={action('Submit')}/>)
  .add('Form with error', () => <Signup signupFormData={{ error: 'User already exists.' }} onSubmit={action('Submit')}/>);