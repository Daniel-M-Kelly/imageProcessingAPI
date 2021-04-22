import fs from 'fs';
import path from 'path';
import express from 'express';

//checkCache function takes imgPath string to determine if the file already exists. Returns boolean.
const checkCache = (imgPath: string): boolean => {
	//If file exists, return true, else return false.
	if (fs.existsSync(imgPath)) {
		console.log('File already cached!');
		return true;
	} else {
		console.log(`Image thumb doesn't exist`);
		return false;
	}
};

export default checkCache;
