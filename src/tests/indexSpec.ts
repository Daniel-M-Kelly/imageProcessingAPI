import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Check Express Server', () => {
    it('Check server runs', async () => {
        const response = await request.get('http://localhost:3000/');
        expect(response.status).toBe(200);
    }
)});