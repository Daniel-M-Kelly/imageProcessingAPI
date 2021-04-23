"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//checkCache function takes imgPath string to determine if the file already exists. Returns boolean.
var checkCache = function (imgPath) {
    //If file exists, return true, else return false.
    if (fs_1.default.existsSync(imgPath)) {
        console.log('File already cached!');
        return true;
    }
    else {
        console.log("Image thumb doesn't exist");
        return false;
    }
};
exports.default = checkCache;
