import supertest from 'supertest';
import app from '../index';
import fs from 'fs';
import path from 'path';

//Load express app from index.js into supertest
const request = supertest(app);

describe('Check Express Server', () => {
	it('Check if server is running, should return 200 status', async () => {
		const response = await request.get('/');
		expect(response.status).toBe(200);
	});
	it('Create test thumbnail file and check if images route is working, should return 200 status', async () => {
		fs.writeFileSync(path.resolve('assets/thumb/TestFile.jpg'), 'test');
		const response = await request.get(
			'/api/images?name=TestFile.jpg&width=200&height=200'
		);
		expect(response.status).toBe(200);
		fs.unlinkSync(path.resolve('assets/thumb/TestFile.jpg'));
	});
});
