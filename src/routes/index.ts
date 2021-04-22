import express from 'express';
import imageProc from './api/imageProc';
import validCheck from './api/validCheck';

const routes = express.Router();
const middleware = [validCheck, imageProc];

routes.use(
	'/images',
	middleware,
	(req: express.Request, res: express.Response) => {
		res.send('Ok');
	}
);

export default routes;
