import fs from 'fs';
import path from 'path';
import checkCache from '../routes/api/utilities/checkCache';

describe('Testing the checkCache module used to determine whether the requested file already exists cached in the filesystem under the assets/thumb folder', () => {
	//Create file for postitive test
	beforeAll(() => {
		fs.writeFileSync(path.resolve('assets/thumb/TestFile.jpg'), 'test');
	});

	it('Should return false for the file that does not exist ', () => {
		expect(
			checkCache(path.resolve('assets/thumb/nonExistantFile.jpg'))
		).toBeFalse();
	});

	it('Should return true for the file that does exist ', () => {
		expect(
			checkCache(path.resolve('assets/thumb/TestFile.jpg'))
		).toBeTrue();
	});

	//Remove file after testing
	afterAll(() => {
		fs.unlinkSync(path.resolve('assets/thumb/TestFile.jpg'));
	});
});
