
module.exports = {
    user: {
        name: { type: String, required: true },
        password: { type: String, required: true }
    },
    commodity: {
        id: Number,
        title: String,
        postage: Number,
        beforeprice:Number,
        nowprice:Number,
        img:String

    },
    admin:{
        id: { type: String },
        title:{ type: String },
        category:{ type: String },
        img:{ type: String },
        beforeprice:{ type: Number },
        nowprice:{ type: Number },
        postage:{ type: String },
        goodscommand:{ type: String },
        shopscommand:{ type: String }

    }
};
