import express from 'express';
import imageProc from './api/imageProc';

const routes = express.Router();

routes.use('/images', imageProc);

export default routes;
