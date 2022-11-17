/*
^https?:\/\/iorest\.com\/writing-api\/user\/info url script-response-body yuanqimazi.js

hostname=iorest.com
*/

let obj = JSON.parse($response.body);

obj["data"]["user"]["vipType"]= 3,
obj["data"]["user"]["vipEndTime"] = 3498253186000,

$done({body: JSON.stringify(obj)});
