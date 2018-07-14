import { message } from 'antd';

export const apiOnSuccess = msg => function* onSuccess() {
  message.success(msg);
};

export const apiOnError = function* onError(action) {
  message.error(action.error);
};