require('bootstrap.native');
if (process.env.NODE_ENV !== "production") {
    require('livejs');
}

const Vue = require('vue');
const App = require('./app.vue');

new Vue({
    el: '#app',
    render: c => c(App),
});

console.log("hello world");
