const dotenv = require('dotenv');
const { app } = require('./app');

dotenv.config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost'; 
app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
