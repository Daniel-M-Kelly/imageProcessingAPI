import fs from 'fs';
import path from 'path';
import express from 'express';

const checkCache = async (imgPath: string): Promise<boolean> => {

	if (fs.existsSync(imgPath)) {
			console.log('File already cached!');
			return true;
		} else {
			console.log(`Image thumb doesn't exist`)
			return false;
		}
};

export default checkCache