import './confige/env.config.js'

import express from 'express';
import authcontroller from './modules/auth/auth.controller.js';
//import usercontroller from './modules/user/user.controller.js';
//import messagecontroller from './modules/message/message.controller.js';
import dbconnection from './db/models/db.connection.js';
import globalErrorHandler from './Middlewares/global-error-handler-middleware.js';

const app = express();

app.use(express.json());

dbconnection();

app.use('/api/auth', authcontroller);
//app.use('/api/user', usercontroller);
//app.use('/api/messages', messagecontroller);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Sarahah App' });
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

app.use(globalErrorHandler);

const port=process.env.PORT

app.listen(port, () => {
    console.log('Server running on port ',port);
});