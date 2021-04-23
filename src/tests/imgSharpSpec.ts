import fs from 'fs';
import path from 'path';
import imgSharp from '../routes/api/utilities/imgSharp';

describe('Testing the imgSharp module to ensure it creates a thumbnail of a file.', () => {
	it('Should create a re-sized file in the thumb directory called TestFile.jpg from the full sized fjord.jpg file. Remove the TestFile once the test is complete.', async (done) => {
		await imgSharp(
			path.resolve('assets/full/fjord.jpg'),
			path.resolve('assets/thumb/TestFile.jpg'),
			'200',
			'200'
		);
		expect(
			fs.existsSync(path.resolve('assets/thumb/TestFile.jpg'))
		).toBeTrue();
		fs.unlinkSync(path.resolve('assets/thumb/TestFile.jpg'));
		done();
	});
});
