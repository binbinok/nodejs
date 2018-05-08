const express = require('express'),
    app = express();

app.get('/', function (req, res) {
    let host = req.headers.host;
    res.send(host);
    console.log(host)
});

app.listen(3000);
app.listen(3001);
app.listen(3002);
app.listen(3003);
app.listen(3004);
app.listen(3005);
app.listen(3006);
app.listen(3007);
app.listen(3008);
app.listen(3009);