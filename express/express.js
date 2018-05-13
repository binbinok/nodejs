const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');

const appHost = {
    'order.duolabao.com': [
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3002',
        'http://localhost:3003',
    ],
    'card.duoalbao.com': [
        'http://localhost:3004',
        'http://localhost:3005',
        'http://localhost:3006',
        'http://localhost:3007',
    ],
    'credit.duolabao.com': [
        'http://localhost:3008',
        'http://localhost:3009',
        'http://localhost:3010',
        'http://localhost:3011',
    ],
}

const routers = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
    'http://localhost:3005',
    'http://localhost:3006',
    'http://localhost:3007',
    'http://localhost:3008',
    'http://localhost:3009',
];
let c = l = routers.length;

let opts = {
    target: 'http://localhost:3000',
    changeOrigin: true,
    router: function (e) {
        let url = e.url;
        if (c <= 0) c = l;
        return routers[c--];
    }
};
let exampleProxy = proxy(opts);

app.use('/', exampleProxy);
app.listen(8088);