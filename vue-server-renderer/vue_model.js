const Vue = require('vue');

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
"{{kids.length}} kids:</p>" +
"<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

var data = {
    "name": "Alan", 
    "hometown": "Somewhere, TX",
    "kids": []
};
for (let index = 0; index < 1000; index++) {
    data.kids.push({"name": "Jimmy", "age": "12"})
}
console.log(data);
const app = new Vue({
    data: data,
    template: source
});



const renderer = require('vue-server-renderer').createRenderer();

renderer.renderToString(app, (err, html) => {
    if (err) throw err;
    console.log(html);
});

