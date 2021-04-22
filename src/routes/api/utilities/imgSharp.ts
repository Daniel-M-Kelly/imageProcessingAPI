import express from 'express';
import sharp from 'sharp';
import path from 'path';

//imgSharp function receives inputpath: imgPath, outputpath: thumbPath, output image width: imgWidth, and output image height: imgHeight. Returns a void promise because it is asynchronus and creates a file in a directory.

const imgSharp = async (
	imgPath: string,
	thumbPath: string,
	imgWidth: string,
	imgHeight: string
): Promise<void> => {
	//Parse the imgWidth and imgHeight strings for integer values
	const width = parseInt(imgWidth);
	const height = parseInt(imgHeight);

	//Try to process and write the file to the filesystem
	try {
		await sharp(imgPath).resize(width, height).toFile(thumbPath);
		console.log('File Successfully resized and cached!');
	} catch (err) {
		console.log(err);
	}
};

export default imgSharp;
