const Core = require('@alicloud/pop-core');
const config = require('./config');
const key = require('./key');

const client = new Core(Object.assign({}, config, key));

const params = {
  "RegionId": "ap-northeast-1"
};
const requestOption = {
  method: 'POST',
};

client.request('DescribeInstanceStatus', params, requestOption).then((result) => {
  console.log(JSON.stringify(result));
}, (ex) => {
  console.log(ex);
});
