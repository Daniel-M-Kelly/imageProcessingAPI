import express from 'express';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageProc = express.Router();

imageProc.get(
	'/',
	async (req: express.Request, res: express.Response): Promise<void> => {
		const name = req.query.name;
		const width = parseInt((req.query.width as unknown) as string);
		const height = parseInt((req.query.height as unknown) as string);

		console.log(`Resizing Image ${name} to ${width}px x ${height}px`);

		if (fs.existsSync(`./assets/thumb/${name}`)) {
			console.log('File already cached!');
			//send image
			res.sendFile(path.resolve(`assets/thumb/${name}`));
		} else {
			try {
				const filePath = `./assets/full/${name}`;
				await sharp(filePath)
					.resize(width, height)
					.toFile(`./assets/thumb/${name}`);
				console.log('File Successfully resized and cached');
				//send image
				res.sendFile(path.resolve(`assets/thumb/${name}`));
			} catch (err) {
				console.log(err);
				res.send('Failure');
			}
		}
	}
);

export default imageProc;
