import { message } from 'antd';

const a = 1;
const b = 2;

export const apiOnSuccess = msg => function* onSuccess() {
  message.success(msg);
};

export const apiOnError = function* onError(action) {
  message.error(action.error);
};