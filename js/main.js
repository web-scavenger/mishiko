var video_play_btn = document.querySelector('.play__btn');
var video = document.getElementById('video');
var mini_imgs = document.getElementsByClassName('gm__imgs--item');
var main_img = document.getElementById('main__img');
var tabs_btn = document.getElementsByClassName('tabs__btns--item');
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video');
}
//play video web
video_play_btn.addEventListener('click', function(){
    document.querySelector('.video__overlay').classList.add('hidden');
    $("#video")[0].src += "&autoplay=1";
    ev.preventDefault();
    video.controls = true;
});

//web gallary
for(var i = 0; i < mini_imgs.length; i++){
    
    mini_imgs[i].addEventListener('mouseover', function(){
        
        main_img.setAttribute('src', this.src);
    })
}
//slider mobile
$(document).on('ready', function() {
    $('.slider__frame').slick({
      slidesToScroll: 1,
      infinite: true,
      dots : true,
      autoplay: true,
      autoplaySpeed: 3000,
    });

});
//tabs
for(var i = 0; i < tabs_btn.length; i++){
    tabs_btn[i].addEventListener('click', function(){
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
        var item = this.getAttribute('data-item');
        $('.tabs__btns--block').fadeOut(0);
        document.getElementById(item).style.display = 'block', 500        
    })
}

//popup overlay
$('.form__submit--btn').click(function(){
    $('.success__overlay').fadeIn('slow');
})
$('.close__btn').click(function(){
    $('.success__overlay').fadeOut('slow');
})

