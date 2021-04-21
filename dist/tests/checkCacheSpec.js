"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var checkCache_1 = __importDefault(require("../routes/api/utilities/checkCache"));
describe('Testing the checkCache module used to determine whether the requested file already exists cached in the filesystem under the assets/thumb folder', function () {
    //Create file for postitive test
    beforeAll(function () {
        fs_1.default.writeFileSync(path_1.default.resolve('assets/thumb/TestFile.jpg'), 'test');
    });
    it('Should return false for the file that does not exist ', function () {
        expect(checkCache_1.default(path_1.default.resolve('assets/thumb/nonExistantFile.jpg'))).toBeFalse();
    });
    it('Should return true for the file that does exist ', function () {
        expect(checkCache_1.default(path_1.default.resolve('assets/thumb/TestFile.jpg'))).toBeTrue();
    });
    //Remove file after testing
    afterAll(function () {
        fs_1.default.unlinkSync(path_1.default.resolve('assets/thumb/TestFile.jpg'));
    });
});
