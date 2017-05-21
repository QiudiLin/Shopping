module.exports = function ( app ) {
    require('./admin')(app);
    require('./taobao')(app);
    require('./login')(app);
}