;(function($,window,document,underfined){
    //settings定义构造函数
    var settings = function(ele,opt){
        this.$element = ele;
        this.defaults = {
            'colors':opt,
        },
        this.options = $.extend({},this.defaults,opt);
    }
    //settings的方法
    //this.$element为dom元素；
    //this.options为带过来的参数
    settings.prototype = {
        ljj:function(){
            var nameNUM = 0;//定义用来设置labelh和input的联系
            var numClick= 0;//定义用来设置labelh和input的联系
            var colors = 0;//颜色变量初始化

            colors = this.options.colors
            self = this.$element;
            
            return this.$element.find('.jing-radio').each(function(i){
                inputID = $(this).children('input').attr('id');
                nameNUM ++;
                forId = inputID + 'L'+nameNUM;
                $(this).prepend("<label class='radio-items' for="+forId+"></label>");
                $(this).find('input').attr({'id':forId});
                $(this).find('input').hide();
                $(this).find('label').css({'border-color':colors})
                
                $(this).find('label').width($(window).width()/51.2+'px');
                $(this).find('label').height($(window).width()/51.2+'px');
                
                $(this).find('label').click(function(){

                    //console.log($(this).parent().parent()[0]);
                    $(this).parent().parent().find('label').css({'background':'white'})
                    $(this).parent().parent().find('label').text('');
                    $(this).parent().parent().find('label').removeClass('checked');
                    
                    $(this).append("<i class='iconfont icon-duihao'></i>");
                    $(this).addClass('checked');
                    $(this).css({'background':colors})
                    console.log($(this).attr('for'))
                });
                
            })
        },
    }
    $.fn.jingRadio = function(options){
        var Func = new settings(this,options);
        return Func.ljj();
    }
})(jQuery,window,document);