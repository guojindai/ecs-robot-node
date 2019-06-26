const Core = require('@alicloud/pop-core');
const config = require('./config');
const key = require('./key');

const client = new Core(Object.assign({}, config, key));

const params = {}
const requestOption = {
  method: 'POST'
};

client.request('DescribeInstances', params, requestOption).then((result) => {
  console.log(result);
}, (ex) => {
  console.log(ex);
});
