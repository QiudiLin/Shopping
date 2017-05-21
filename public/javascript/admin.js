$(document).ready(function () {
    if ($("#admin").length > 0) {
        AdminMgr.InitPageDate();
        AdminMgr.InitEvent();

    }
});

var AdminMgr = {
    NormalID: "",
    BtnPattern: 0,//0添加，1修改

    InitPageDate: function () {
        this.Container = $("#admin");
    },

    InitEvent: function () {
        var _this = this;

        _this.Container.find("button[data-act='close']").on("click", function () {
            _this.Container.find(".modal").hide().find("input[data-sysname='id']").removeAttr("disabled");
        });
        //增删改存
        _this.Container.find("button.add").on("click", function () {
            _this.BtnPattern = 0;
            _this.Container.find(".modal").show().find("input").val("");
        });

        _this.Container.find(".modal-footer button.save").on("click", function () {
            if( _this.Container.find("input[data-sysname='id']").val()==""||(_this.Container.find("[data-sys='table'] tr[data-sys-id='"+ _this.Container.find("input[data-sysname='id']").val()+"']").length>0&&_this.BtnPattern == 0)){
                return;
            }

            _this.Container.find(".modal input").each(function (index, item) {
                var val = $(item).val();
                _this.SetCommodity($(item).attr("data-sysname"), val);
            });

            if (_this.BtnPattern == 0) {
                AdminMgr.AppendTdText();
                AdminMgr.AddTheCommodity();
            }else if(_this.BtnPattern == 1){
                AdminMgr.EditTdText();
                AdminMgr.EditTheCommodity();
            }

            _this.Container.find(".modal").hide().find("input[data-sysname='id']").removeAttr("disabled");

        });

        _this.Container.find("[data-sys='table']").on("click", 'button.edit', function () {
            var $parents = $(this).parents("tr.item-id-1");
            _this.BtnPattern = 1;
            _this.Container.find(".modal").show().find("input[data-sysname='id']").attr("disabled","disabled");
            _this.Container.find(".modal").show().find("input").each(function (index, item) {
                $parents.find("td").each(function (idx, ite) {
                    if ($(ite).attr("data-sysname") == $(item).attr("data-sysname")) {
                       $(item).val($(ite).text());
                    }
                })
            });
        });

        _this.Container.find("[data-sys='table']").on("click", 'button.del', function (){
            AdminMgr.ID=$(this).parents("tr[data-sys-id]").attr("data-sys-id")
            $(this).parents("tr[data-sys-id]").remove();
            _this.DelTheCommodity();
        })
    },

    AppendTdText: function () {
        AdminMgr.Container.find("[data-sys='table'] tbody").append("<tr class='item-id-1' data-sys-id='"+AdminMgr.ID+"'><td data-sysname='id'>" + AdminMgr.ID + "</td>" + "<td data-sysname='title'>" + AdminMgr.Title + "</td>" + "<td data-sysname='category'>" + AdminMgr.Category + "</td>" + "<td data-sysname='img'>" + AdminMgr.Img + "</td>" + "<td data-sysname='beforeprice'>" + AdminMgr.Beforeprice + "</td>" + "<td data-sysname='nowprice'>" + AdminMgr.Nowprice + "</td>" + "<td data-sysname='postage'>" + AdminMgr.Postage + "</td>" + "<td data-sysname='goodscommand'>" + AdminMgr.Goodscommand + "</td>" + "<td data-sysname='shopscommand'>" + AdminMgr.Shopscommand + "</td>  <td><button type='button' class='btn btn-info edit'>修改</button></td> <td><button type='button' class='btn btn-danger del'>删除</button></td></tr>");
    },

    EditTdText:function () {
        AdminMgr.Container.find("[data-sys='table'] tbody tr[data-sys-id='"+AdminMgr.ID+"']").html("<td data-sysname='id'>" + AdminMgr.ID + "</td>" + "<td data-sysname='title'>" + AdminMgr.Title + "</td>" + "<td data-sysname='category'>" + AdminMgr.Category + "</td>" + "<td data-sysname='img'>" + AdminMgr.Img + "</td>" + "<td data-sysname='beforeprice'>" + AdminMgr.Beforeprice + "</td>" + "<td data-sysname='nowprice'>" + AdminMgr.Nowprice + "</td>" + "<td data-sysname='postage'>" + AdminMgr.Postage + "</td>" + "<td data-sysname='goodscommand'>" + AdminMgr.Goodscommand + "</td>" + "<td data-sysname='shopscommand'>" + AdminMgr.Shopscommand + "</td>  <td><button type='button' class='btn btn-info edit'>修改</button></td> <td><button type='button' class='btn btn-danger del'>删除</button></td>");
    },

    SetCommodity: function (sysname, val) {
        switch (sysname) {
            case "id":
                AdminMgr.ID = val;
                break;
            case "title":
                AdminMgr.Title = val;
                break;
            case "category":
                AdminMgr.Category = val;
                break;
            case "img":
                AdminMgr.Img = val;
                break;
            case "beforeprice":
                AdminMgr.Beforeprice = val;
                break;
            case "nowprice":
                AdminMgr.Nowprice = val;
                break;
            case "postage":
                AdminMgr.Postage = val;
                break;
            case "goodscommand":
                AdminMgr.Goodscommand = val;
                break;
            case "shopscommand":
                AdminMgr.Shopscommand = val;
                break;
        }
    },

    AddTheCommodity: function () {

        var dataCarrier = {
            id: AdminMgr.ID,
            title: AdminMgr.Title,
            category: AdminMgr.Category,
            img: AdminMgr.Img,
            beforeprice: AdminMgr.Beforeprice,
            nowprice: AdminMgr.Nowprice,
            postage: AdminMgr.Postage,
            goodscommand: AdminMgr.Goodscommand,
            shopscommand: AdminMgr.Shopscommand
        };
        console.log(dataCarrier)
        $.ajax({
            type: "POST",
            url: '../add',
            data: JSON.stringify(dataCarrier),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {

            },
            error: function (error) {

            }
        });

    },
    
    DelTheCommodity: function () {

        var dataCarrier = {
            id: AdminMgr.ID
        };
        console.log(dataCarrier)
        $.ajax({
            type: "POST",
            url: '../del/'+AdminMgr.ID,
            data: JSON.stringify(dataCarrier),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {

            },
            error: function (error) {

            }
        });

    },

    EditTheCommodity: function () {

        var dataCarrier = {
            id: AdminMgr.ID,
            title: AdminMgr.Title,
            category: AdminMgr.Category,
            img: AdminMgr.Img,
            beforeprice: AdminMgr.Beforeprice,
            nowprice: AdminMgr.Nowprice,
            postage: AdminMgr.Postage,
            goodscommand: AdminMgr.Goodscommand,
            shopscommand: AdminMgr.Shopscommand
        };
        console.log(dataCarrier)
        $.ajax({
            type: "POST",
            url: '../edit/'+AdminMgr.ID,
            data: JSON.stringify(dataCarrier),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result) {

            },
            error: function (error) {

            }
        });

    }
}