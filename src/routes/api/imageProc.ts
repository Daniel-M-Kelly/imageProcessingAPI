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
		//Assert types, and assign url query strings to variables.
		const imgPath = path.resolve(
			`assets/full/${(req.query.name as unknown) as string}`
		);
		const thumbPath = path.resolve(
			`assets/thumb/${(req.query.name as unknown) as string}`
		);
		const width = (req.query.width as unknown) as string;
		const height = (req.query.height as unknown) as string;

		/* console.log(
			`Processing Image ${req.query.name} to ${req.query.width}px x ${req.query.height}px`
		); */

		//Use checkCache module to determine whether a thumbnail image already exists.
		if (await checkCache(thumbPath)) {
			//console.log('Serving cached file!');
			//If the thumbnail image exists, respond with the file.
			res.sendFile(thumbPath);
		} else {
			//If a thumbnail image doesn't exist, use the imgSharp module to create one.
			//console.log('Attempting to resize and cache file!');
			await imgSharp(imgPath, thumbPath, width, height);
			//Once new file is created, send it in the response.
			res.sendFile(thumbPath);
		}
	}
);

export default imageProc;
