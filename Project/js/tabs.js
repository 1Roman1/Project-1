$(document).ready(function(){

$('ul.tabs-caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active-li').siblings().removeClass('active-li')
      .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });

$('div.tabs').on('click', 'div.tabs-switch-l', function(){
	if($('.active-li').index()>0) {
		$('li.tabs-li.active-li').removeClass('active-li').prev().addClass('active-li');
		$('div.tabs-content.active').removeClass('active').prev().addClass('active');
	}
});

$('div.tabs').on('click', 'div.tabs-switch-r', function(){
	if($('.active-li').index()<3) {
		$('li.tabs-li.active-li').removeClass('active-li').next().addClass('active-li');
		$('div.tabs-content.active').removeClass('active').next().addClass('active');
	}
});

})