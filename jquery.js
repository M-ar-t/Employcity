jQuery(function(){
    $('.burger-menu').on('click',()=>{
        $('.nav').addClass('nav_active');
        $('.close-btn').addClass('close-btn_active');
    })
    $('.close-btn ').on('click',()=>{
        $('.nav').removeClass('nav_active');
        $('.close-btn').removeClass('close-btn_active');
    })
    $('.nav__item').on('click',(e)=>{
        $('.nav').removeClass('nav_active');
        $('.close-btn').removeClass('close-btn_active');
        let currentLink = e.currentTarget.id
        $('.nav__list li').each(function() {
            if (currentLink ===$(this).attr('id')){
               $(this).addClass('nav__item_active')
            }else{
                $(this).removeClass('nav__item_active')
            }
           
     })
    })
})