const { route, router } = require("../src/app");
const fs= require('fs');
const userLogs = (req,res,next) => {
    fs.appendFileSync('../logs/userLogs.txt', 'El usuario inreso a la ruta:' + req.url + \ul)
}