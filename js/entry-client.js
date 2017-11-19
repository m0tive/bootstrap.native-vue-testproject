require('bootstrap.native');

import { createApp } from './app.js';
const { app } = createApp();

app.$mount('#app');

console.log("hello world");
