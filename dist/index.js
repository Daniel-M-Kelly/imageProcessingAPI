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
//Route to confirm server is running
app.get('/', function (req, res) {
    res.send('Server Running');
});
//API routes
app.use('/api', index_1.default);
//Export app for testing
exports.default = app;
