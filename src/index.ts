import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

//Start Express Server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

app.use('/', routes);
