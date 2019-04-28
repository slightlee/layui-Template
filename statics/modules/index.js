
layui.extend({
    configs: 'config',
    admin : 'admin',
    mTab : 'mTab'
}).define(['configs','mTab','layer','element','admin'],function(exports){

    var configs = layui.configs,
    mTab =layui.mTab,
        element =layui.element,
        admin = layui.admin,
        $ = layui.jquery,
        layer = layui.layer;




    /* 点击清除缓存 */
    $("#clearCache").on('mouseenter',function () {
       var title = $(this).attr('title');
        this.index =  layer.tips(title,this,{
           tips:[3, '#000000']
       })
    }).on('mouseleave', function () {
        layer.close(this.index);
    }).on("click", function () {
        window.sessionStorage.removeItem("");   // ?????  key 值
        layer.msg("缓存清除成功！");
    });

    /* 开启导航栏B，展示B的子导航栏，然后自动关闭导航栏A */
    $('.layui-nav-item').click(function(){
        $(this).siblings('li').attr('class','layui-nav-item');
    })


    exports('index', {});
});

