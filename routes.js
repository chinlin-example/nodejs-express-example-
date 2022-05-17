module.exports = function (app ,passport) {
    app.use('/example', require('api/example'));
    app.use('/user', require('./api/user'));
}