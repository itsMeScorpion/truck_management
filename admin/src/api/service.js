import instance from './instance';

export const postData = (url, data) => instance.post(url, data);
export const getData = (url) => instance.get(url);
