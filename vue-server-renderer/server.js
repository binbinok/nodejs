const Vue = require('vue');
const server = require('express')();
const vueSenderer = require('vue-server-renderer');
const fs = require('fs');

const createApp = require('./app');

// server.get('/index', (req, res) => {
//     console.log('index');
//     console.log()
//     const html = fs.readFileSync('./template/index.html', 'utf-8')
//     const app = new Vue({
//         data: {
//             url: req.url
//         },
//         template: html
//     });
//     console.log('html', html);
//     const renderer = vueSenderer.createRenderer();
//     console.log(123123123, renderer);
//     renderer.renderToString(app, (err, html) => {
//         console.log(err, html)
//         res.end(html)
//     });
// });

server.get('*', (req, res) => {
    const context = { url: req.url };
    const app = createApp(context);
    const renderer = vueSenderer.createRenderer();

    renderer.renderToString(app, (err, html) => {
        // 处理错误……
        if (err) return console.log(`err: ${err}`);
        res.end(html);
    });
});

server.listen(8080);