
// ES6 (>=node 10.16.0 LTS)
import { Gitlab } from '@gitbeaker/node'; // All Resources
import { Projects } from '@gitbeaker/node'; // Just the Project Resource
//...etc

// ES5, assuming native or polyfilled Promise is available
const { Gitlab } = require('@gitbeaker/node');

const api = new Gitlab({
    token: 'personaltoken',
  });