import fs from 'fs';
import path from 'path';
import express from 'express';

//validCache function takes imgPath string to determine if the file already exists. Returns void
const validCheck = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
): void => {
	const imgPath = path.resolve(
		`assets/full/${(req.query.name as unknown) as string}`
	);

	if (!req.query.name || !req.query.width || !req.query.height) {
		const err = 'Error!\nMissing parameters';
		res.status(400);
		next(err);
	} else if (fs.existsSync(imgPath)) {
		next();
	} else {
		const err = 'Error!\nInvalid File Name';
		res.status(400);
		next(err);
	}
};

export default validCheck;
