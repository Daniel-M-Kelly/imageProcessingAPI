"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageProc_1 = __importDefault(require("./api/imageProc"));
var validCheck_1 = __importDefault(require("./api/validCheck"));
var routes = express_1.default.Router();
var middleware = [validCheck_1.default, imageProc_1.default];
routes.use('/images', middleware, function (req, res) {
    res.send('Ok');
});
exports.default = routes;
