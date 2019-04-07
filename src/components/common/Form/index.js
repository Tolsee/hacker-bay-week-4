// @flow
import * as React from 'react';
import styled from 'styled-components';
import {
  Input,
  Alert
} from 'antd';

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.danger };
  line-height: 1.5;
  -webkit-transition: color .3s cubic-bezier(.215,.61,.355,1);
  transition: color .3s cubic-bezier(.215,.61,.355,1);
  margin-top: -2px;
  clear: both;
`;

// Field with message
type fieldProps = {
  input: Object ,
  meta: { error: any },
  prefix: React.Node,
  suffix: React.Node,
  type: string,
  label: string,
  fieldTouched: boolean
};

export const renderField =  ({
                               input ,
                               meta: { error },
                               prefix,
                               suffix,
                               type,
                               label,
                               fieldTouched
                             }: fieldProps)  =>  (
  <React.Fragment>
    <Input
      {...input}
      placeholder={label}
      prefix={prefix}
      Suffix={suffix}
      type={type}
    />
    { fieldTouched && error && <ErrorMessage>{error}</ErrorMessage>}
  </React.Fragment>
);

export const Info = styled(Alert)`
  && {
    margin: 10px 0;
  }
`;

