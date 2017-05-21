module.exports = function ( app ) {
    app.get('/', function (req, res) {
        var Admin = global.dbHelper.getModel('admin');
        // var data={
        //     title:'假货代理',
        //     shopping: [{
        //         title:'日韩小饰品四叶草百搭装饰项链女衣服挂件水晶配饰吊坠毛衣链长款',
        //         _id: 1,
        //         postage:0,
        //         beforeprice:100.00,
        //         nowprice:50.00,
        //         img:'/imagic/shopping1.jpg?v=22'
        //     },
        //         {
        //             title:'衣服挂件水晶配饰吊坠毛衣链长款',
        //             _id: 2,
        //             postage:0,
        //             beforeprice:100.00,
        //             nowprice:60.00,
        //             img:'/imagic/shopping2.jpg?v=22'
        //         },{
        //             title:'衣服挂件水晶配饰吊坠毛衣链长款',
        //             _id: 3,
        //             postage:0,
        //             beforeprice:100.00,
        //             nowprice:60.00,
        //             img:'/imagic/shopping3.jpg?v=22'
        //         },
        //         {
        //             title:'衣服挂件水晶配饰吊坠毛衣链长款',
        //             _id:4,
        //             postage:1,
        //             beforeprice:100.00,
        //             nowprice:80.00,
        //             img:'/imagic/shopping4.jpg?v=22'
        //         },
        //         {
        //             title:'衣服挂件水晶配饰吊坠毛衣链长款',
        //             _id: 5,
        //             postage:1,
        //             beforeprice:200.00,
        //             nowprice:80.00,
        //             img:'/imagic/shopping5.jpg?v=22'
        //         },
        //         {
        //             title:'衣服挂件水晶配饰吊坠毛衣链长款',
        //             _id: 6,
        //             postage:0,
        //             beforeprice:100.00,
        //             nowprice:40.00,
        //             img:'/imagic/shopping6.jpg?v=22'
        //         }
        //     ]
        // }

        Admin.find({}, function (error, docs) {
            var data={
                title:'假货代理后台',
                shopping:docs
            };
            res.render('index',data);
        })

    });

}