module.exports= function ( app ) {
    app.get('/admin', function (req, res) {
        if(req.session.user){
            var Admin = global.dbHelper.getModel('admin');
            Admin.find({}, function (error, docs) {
                var data={
                    title:'假货代理后台',
                    shopping:docs
                };
                res.render('admin',data);
            });
        }else{
            req.session.error = "请先登录"
            res.redirect('/login');
        }
});
    app.post('/add', function (req, res) {
        var Admin = global.dbHelper.getModel('admin');
        Admin.create({
            id: req.body.id,
            title: req.body.title,
            category: req.body.category,
            img: req.body.img,
            beforeprice: req.body.beforeprice,
            nowprice: req.body.nowprice,
            postage: req.body.postage,
            goodscommand: req.body.goodscommand,
            shopscommand: req.body.shopscommand
        }, function (error, doc) {
            if (doc) {
                res.send(200);
            }else{
                res.send(404);
            }
        });
    });

    app.post("/edit/:id",function (req,res) {
        var Admin = global.dbHelper.getModel('admin');


        Admin.update({"id":req.params.id},{$set : {title: req.body.title,
            category: req.body.category,
            img: req.body.img,
            beforeprice: req.body.beforeprice,
            nowprice: req.body.nowprice,
            postage: req.body.postage,
            goodscommand: req.body.goodscommand,
            shopscommand: req.body.shopscommand }},function(error,doc){
            //成功返回1  失败返回0
        });
    });
    
    app.post("/del/:id",function (req,res) {
        var Admin = global.dbHelper.getModel('admin');


        Admin.remove({"id":req.params.id},function(error,doc){
            //成功返回1  失败返回0
        });
    });
    
    

}