$(this).ready(function(){
	$('.count').prop('disabled', true);
   	$('.plus').click(function(){
		$(this).prev().val(+$(this).prev().val() + 1);
    });
    $('.minus').click(function(){
		$(this).next().val(+$(this).next().val() - 1);
    });
});