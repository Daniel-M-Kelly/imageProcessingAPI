import express from 'express';

const imageProc = express.Router();

imageProc.get('/', (req, res) => {
	res.send('Process Image');
});

export default imageProc;
