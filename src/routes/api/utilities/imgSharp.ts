import express from 'express';
import sharp from 'sharp';
import path from 'path';

const imgSharp = async (
	imgPath: string,
	thumbPath: string,
	imgWidth: string,
	imgHeight: string
): Promise<void> => {
	const width = parseInt(imgWidth);
	const height = parseInt(imgHeight);
	try {
		await sharp(imgPath).resize(width, height).toFile(thumbPath);
		console.log('File Successfully resized and cached');
	} catch (err) {
		console.log(err);
	}
};

export default imgSharp;
