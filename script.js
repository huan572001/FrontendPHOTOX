$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

    $(window).scroll(function() {
        let position=$(this).scrollTop();
        if(position>=200) {
            $('.nav-menu').addClass('custom-navbar');
        } else {
            $('.nav-menu').removeClass('custom-navbar');
        }
    });

    $(window).scroll(function(){
        let position =$(this).scrollTop();
        if(position>=700) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value==='all'){
            $('.filter').show(300);
        } else{
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).scroll(function(){
        let position =$(this).scrollTop();
        if(position>=4400) {
            $('.card-1').addClass('moveFromLeft');
            $('.card-2').addClass('moveFromBottom');
            $('.card-3').addClass('moveFromRight');
        } else {
            $('.card-1').removeClass('moveFromLeft');
            $('.card-2').removeClass('moveFromBottom');
            $('.card-3').removeClass('moveFromRight');
        }
    });
});
// Stick menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Smooth Scrolling
$('#myNavbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top-65  
            },
            1000
        );
    }
});