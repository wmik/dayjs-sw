## dayjs-sw
![Travis (.com)](https://img.shields.io/travis/com/wmik/dayjs-sw.svg?style=flat-square)
[![codecov coverage](https://img.shields.io/codecov/c/github/wmik/dayjs-sw.svg?style=flat-square)](https://codecov.io/github/wmik/dayjs-sw)
![npm](https://img.shields.io/npm/v/dayjs-sw.svg)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/wmik/dayjs-sw.svg)](https://greenkeeper.io/)

### Installation
`$ npm install dayjs-sw`
### Usage
```javascript
const dayjs = require("dayjs");
const  swLocale = require("dayjs-sw");

dayjs.locale(swLocale);

dayjs("2018-07-16").format("MMMM") // "Julai" (July)
dayjs("2020").from("2018"), // "miaka 2 ijayo" (literal translation 2 years to come / later)
```

### License
MIT © wmik
