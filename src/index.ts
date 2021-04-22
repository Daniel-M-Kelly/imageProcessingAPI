import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

//Start Express Server
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});

//Route to confirm server is running
app.get('/', (req, res) => {
	res.send('Server Running');
});

//API routes
app.use('/api', routes);

//Export app for testing
export default app;
