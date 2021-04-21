import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import checkCache from './utilities/checkCache';
import imgSharp from './utilities/imgSharp';

const imageProc = express.Router();

imageProc.get(
	'/',
	async (req: express.Request, res: express.Response): Promise<void> => {

		const imgPath = path.resolve(`assets/full/${req.query.name}`);
		const thumbPath = path.resolve(`assets/thumb/${req.query.name}`);
		const width = (req.query.width as unknown) as string;
		const height = (req.query.height as unknown) as string;

		console.log(`Processing Image ${req.query.name} to ${req.query.width}px x ${req.query.height}px`);

		if (await checkCache(thumbPath)){
			console.log('Serving cached File!');
			res.sendFile(thumbPath);
		} else {
			await imgSharp(imgPath, thumbPath, width, height);
			res.sendFile(thumbPath)
		}
	}
);

export default imageProc;
