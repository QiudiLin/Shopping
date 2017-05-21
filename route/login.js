module.exports = function ( app ) {
    app.get('/login', function (req, res) {
        res.render('login');
    });
    
    app.post('/login', function (req, res) {
        var User = global.dbHelper.getModel('user'),
            uname = req.body.uname;
        User.findOne({name: uname}, function (error, doc) {
            if (error) {
                res.send(500);
                console.log(error);
            } else if (!doc) {
                req.session.error = '用户名不存在！';
                res.send(404);
            } else {
                if(req.body.upwd != doc.password){
                    req.session.error = "密码错误!";
                    res.send(404);
                }else{
                    req.session.user=doc;
                    res.send(200);
                }
            }
        });
    });
    
    
    // app.post('/register', function (req, res) {
    //     var User = global.dbHelper.getModel('user'),
    //         uname = "admin1";
    //     User.findOne({name: uname}, function (error, doc) {
    //         if (error) {
    //             res.send(500);
    //             req.session.error = '网络异常错误！';
    //             console.log(error);
    //         } else if (doc) {
    //             req.session.error = '用户名已存在！';
    //             res.send(500);
    //         } else {
    //             User.create({
    //                 name: uname,
    //                 password: 18826478649
    //             }, function (error, doc) {
    //                 if (error) {
    //                     res.send(500);
    //                     console.log(error);
    //                 } else {
    //                     req.session.error = '用户名创建成功！';
    //                     res.send(200);
    //                 }
    //             });
    //         }
    //     });
    // });
}