const Handlebars = require('handlebars');
let d = () => new Date();
let start = d();

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
"{{kids.length}} kids:</p>" +
"<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { 
    "name": "Alan", 
    "hometown": "Somewhere, TX",
    "kids": []
};
for (let index = 0; index < 10000; index++) {
    data.kids.push({"name": "Jimmy", "age": "12"})
}
var result = template(data);

console.log('date', d() - start)