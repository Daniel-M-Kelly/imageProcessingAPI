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
	it('Test if images route is working with fjord.jpg file, should return 200 status', async () => {
		const response = await request.get(
			'/api/images?name=fjord.jpg&width=200&height=200'
		);
		expect(response.status).toBe(200);
		fs.unlinkSync(path.resolve('assets/thumb/fjord.jpg'));
	});
});
