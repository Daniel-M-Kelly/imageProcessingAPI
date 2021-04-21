import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

//Start Express Server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

app.get('/', (req, res) => {
	res.send('Success')
});
app.use('/api', routes);

export default app;