const express = require('express');
const app = express();

const clientRoutes = require('./src/routes/clients');

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.use('/clients', clientRoutes);

app.use((req,res,next)=> {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
}) 

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;