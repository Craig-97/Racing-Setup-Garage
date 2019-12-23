const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db/mongoose');

const app = express();
const apiPort = process.env.PORT || 3000;

// app wide middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// register routes
const driverRoutes = require('./routes/driverRoutes');
const carRoutes = require('./routes/carRoutes');
const gameRoutes = require('./routes/gameRoutes');
const trackRoutes = require('./routes/trackRoutes');
const setupRoutes = require('./routes/setupRoutes');
driverRoutes(app);
carRoutes(app);
gameRoutes(app);
trackRoutes(app);
setupRoutes(app);

// start message
app.listen(apiPort, () => console.log(`API Server running on port ${apiPort}`));
