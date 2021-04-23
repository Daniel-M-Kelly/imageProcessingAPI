"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
//validCache function takes imgPath string to determine if the file already exists. Returns void
var validCheck = function (req, res, next) {
    var imgPath = path_1.default.resolve("assets/full/" + req.query.name);
    if (!req.query.name || !req.query.width || !req.query.height) {
        var err = 'Error!\nMissing parameters';
        res.status(400);
        next(err);
    }
    else if (fs_1.default.existsSync(imgPath)) {
        next();
    }
    else {
        var err = 'Error!\nInvalid File Name';
        res.status(400);
        next(err);
    }
};
exports.default = validCheck;
