const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//  middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//  routes
app.use('/users', require('./routes/users'));

// app.use('/users', require('./routes/users'));
app.get('/', (req, res, next) => {
    res.status(200).json({
        message : 'You requested index page!!'
    })
})
//  catch 404 errors and forward them to error handlers
// app.use((req, res, next) => {
//     const err = new Error('Not Found').status(404);
//     next(err);
// })

//  error handler function
// app.use((err, req, res, next) => {
//     //  check whether environment variable 'env' is set to production & if set to development environment 
//     //  if set to development, pass the entire error object, else just an empty object
//     const error = app.get('env') === 'development' ? err : {};

//     const status = err.status || 500;

//     //  respond to the client
//     res.status(status).json({
//         error : {
//             message : error.message
//         }
//     })

//     //  respond to ourselves
//     console.error(err)
// })
 
//  spinning the server
const port = process.env.PORT || 8000;

app.listen(port, () => {  
    console.log(`Server listening to port no. ${port}`);    
})