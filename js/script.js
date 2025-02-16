var body = document.body;
window.addEventListener('load', function() {
    body.classList.add('active');
});

function imageJustSize() {
    var mainVisual = document.getElementById('js-main-visual');
    var winH = window.innerHeight;
    mainVisual.style.height = winH + 'px';
}
imageJustSize();

$(function(){

    // トグルボタン
    $(".article-btn").click(function() {
        var show_text = $(this).parent().next(".article-text");
        var small_height = 0; //This is initial height.
        var original_height = show_text.css({ height: "auto" }).height();

        if($(this).hasClass("open")){
            // 開いている状態の状態の場合
            show_text.animate({ height: small_height },400, 'swing');
            show_text.removeClass("open");
            $(this).removeClass("open");

            // スクロール
            var target_close = $(this);
            $('html, body').stop().animate({
                'scrollTop': target_close.offset().top
            }, 400, 'swing', function () {
            window.location.hash = target_close;
            });

        }else{
            //閉じている状態の場合
            show_text.height(small_height).animate({ height: original_height }, 400, function() {
                show_text.height("auto");
            });
            show_text.addClass("open");
            $(this).addClass("open");

            // スクロール
            var target_open = $(this).parent().next(".article-text");
            $('html, body').stop().animate({
                'scrollTop': target_open.offset().top
            }, 400, 'swing', function () {
            window.location.hash = target_open;
            });

            // スライダーを描画　<!-- https://on-ze.com/blog/1658　（general） -->
            if(!$(this).hasClass("slider_active")){
                var re_slider = $(this).parent().next(".content").children(".box").children(".s_slider").attr('class').split(" ")[0];
                var bx_thumbnail = $(this).parent().next(".content").children(".box").children(".thumb").attr('class').split(" ")[0];
                var bx_thumbnail = "." + bx_thumbnail;
                $()
                $('.' + re_slider).bxSlider({
                    mode: 'fade',
                    pager: true,
                    controls: false,
                    pagerCustom: bx_thumbnail,
                });
            }

            $(this).addClass("slider_active");

        }

    });
    //閉じるボタン
    $(".close_btn").click(function() {
        // close
        var small_height = 0; //This is initial height.
        $(this).parent().animate({ height: small_height },400, 'swing');
        $(this).parent().removeClass("open");
        $(this).parent().prev().children('.article-btn').removeClass("open");

        // スクロール
        var close_icon = $(this).parent().prev();
        $('html, body').stop().animate({
            'scrollTop': close_icon.offset().top
        }, 400, 'swing', function () {
        window.location.hash = close_icon;
        });
    });

    // スムーススクロール
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
 
        var target = this.hash;
        var $target = $(target);
 
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
        window.location.hash = target;
        });
    });
});