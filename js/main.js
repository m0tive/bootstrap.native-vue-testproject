require('bootstrap.native');
require('livejs');
const Vue = require('vue');
const App = require('./app.vue');

new Vue({
    el: '#app',
    render: c => c(App),
});

console.log("hello world");
