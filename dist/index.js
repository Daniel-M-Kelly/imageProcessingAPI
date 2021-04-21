"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var port = 3000;
//Start Express Server
app.listen(port, function () {
    console.log("Server started at http://localhost:" + port);
});
app.get('/', function (req, res) {
    res.send('Success');
});
app.use('/api', index_1.default);
exports.default = app;
