

var slideWidth=380;
var sliderTimer;

$(function(){

$('.slidewrapper').width($('.slidewrapper').children().size() * slideWidth);
    sliderTimer=setInterval(nextSlide, 2000);
    $('.viewport').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer=setInterval(nextSlide, 2000);
    });

    $('#prev-slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
        sliderTimer = setInterval(nextSlide, 2000);
})

    $('#next-slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
        sliderTimer = setInterval(nextSlide, 2000);
})

});

function nextSlide(){
    var currentSlide = parseInt($('.slidewrapper').data('current'));
    currentSlide++;
    if(currentSlide >= $('.slidewrapper').children().size())
    {
        $('.slidewrapper').css('left', -(currentSlide - 2) * slideWidth);
        $('.slidewrapper').append($('.slidewrapper').children().first().clone());
        $('.slidewrapper').children().first().remove();
        currentSlide--;   
    }
    $('.slidewrapper').animate({left: -currentSlide * slideWidth}, 380).data('current',currentSlide);
};

function prevSlide(){
    var currentSlide = parseInt($('.slidewrapper').data('current'));
    currentSlide--;
    if(currentSlide < 0)
    {
        $('.slidewrapper').css('left', -(currentSlide + 2) * slideWidth);
        $('.slidewrapper').prepend($('.slidewrapper').children().last().clone());
        $('.slidewrapper').children().last().remove();
        currentSlide++;   
    }
    $('.slidewrapper').animate({left: -currentSlide * slideWidth},380).data('current',currentSlide);
}