var winW = document.documentElement.clientWidth;
var desW = 640;/*设计稿的宽度*/
//把根元素的字体大小设置成100px就是为了好算,比如量的设计稿里的宽度是188px -->1.88rem
var scale = 640/100;/*缩放的比例*/
document.documentElement.style.fontSize = winW/scale+"px";

$(document).ready(function () {
    if($("#taobao").length>0){
        TaoBaoMgr.InitPageDate();
        TaoBaoMgr.InitEvent();

    }
});

var TaoBaoMgr={

    InitPageDate:function () {
        this.Container=$("#taobao");
    },

    InitEvent:function () {
        var _this=this;

        _this.Container.find(".nav-box>ul>li").on("click",function () {
            _this.Container.find(".nav-box>ul>li").removeClass("select");
            $(this).addClass("select");
        });

        _this.Container.find(".shadow-box .close").on("click",function () {
            $(this).parents(".shadow-box").hide();
        });

        _this.Container.find(".btn-box .btn-buy").on("click",function () {
           var $content= $(this).parents(".content");

            _this.Container.find(".taobao-step").hide();
            _this.Container.find(".taobao2").show().find(".share-content-title").text($content.attr("data-name"));
            _this.Container.find(".taobao2 .share-img-box img").attr("src",$content.find(".img-box>img").attr("src"))
        });
        _this.Container.find(".back-box .back").on("click",function () {
            _this.Container.find(".taobao-step").hide();
            _this.Container.find(".taobao1").show();
        });
        _this.Container.find(".btn-box .btn-share").on("click",function () {
            _this.Container.find(".shadow-box").show();
        })

        _this.Container.find(".search-box [data-act='search']").on("click",function () {
           var str=_this.Container.find(".search-box .search-input input").val();

            _this.Container.find(".content-box .content").each(function (index,item) {
               if($(item).attr("data-name").indexOf(str)>-1){
                   $(item).show();
               }else{
                   $(item).hide();
               }
            })

        })

        _this.Container.find(".nav-box>ul>li").on("click",function () {
            var category=$(this).attr("data-category");
            category=="total"?_this.Container.find(".content").show():_this.Container.find(".content").hide();
            console.log(TaoBaoMgr.Container.find(".content[data-category='tt']").length)
            console.log(_this.Container.find(".content[data-category='"+category+"']").length)
            _this.Container.find(".content[data-category='"+category+"']").show();

        })

    }
}