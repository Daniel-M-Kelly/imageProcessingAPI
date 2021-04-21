"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var checkCache = function (imgPath) {
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
