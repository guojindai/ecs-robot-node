const Core = require('@alicloud/pop-core');
const config = require('./config');
const key = require('./key');

const client = new Core(Object.assign({}, config, key));

const params = {
  "InstanceId": "i-6wef1ci2ftbc8ghmgxq8"
};
const requestOption = {
  method: 'POST',
};

client.request('StopInstance', params, requestOption).then((result) => {
  console.log(JSON.stringify(result));
}, (ex) => {
  console.log(ex);
});
