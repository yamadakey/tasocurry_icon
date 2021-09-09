{
    `use strict`;

    (()=>{
        $('.menu-trigger').on('click',function(){
            $(this).toggleClass('active');
            $('#global-nav').toggleClass('active');
        });

        $(".nav_li li").on('click',function(){
            $('#global-nav').removeClass('active')
            $('.menu-trigger').removeClass('active')
        });


        // イラストのこだわり ボタン
        // オプション
        $(function(){
            $('.pro_option').on('click',function(){
                $('.profile_setumei').removeClass('active01')
                $('.profile_setumei02').removeClass('active01')
                $('.option').addClass('active01');
            })
        });

        // 配色
        $(function(){
            $('.pro_color').on('click',function(){
                $('.option').removeClass('active01')
                $('.profile_setumei02').removeClass('active01')
                $('.profile_setumei').addClass('active01')
            })
        });

        // 線
        $(function(){
            $('.pro_line').on('click',function(){
                $('.option').removeClass('active01')
                $('.profile_setumei').removeClass('active01')
                $('.profile_setumei02').addClass('active01')
            })
        });

        ギャラリー
        $(function(){
            $('.zisseki').on('click',function(){
                $('.work_display').removeClass('active02')
                $('.zisseki_display').addClass('active02')
            })
        });

        $(function(){
            $('.sakuhin').on('click',function(){
                $('.work_display').toClass('active02')
            })
        });

        $('.zisseki').on('click',function(){
            $(this).toggleClass('active02');
            $('.zisseki_display').toggleClass('active02');
        });


    })();// jQuery END


}

