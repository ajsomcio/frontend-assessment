var tabnav = "";
var accitem = "";

$.getJSON("data.json", function(readcont) {
    $.each(readcont, function(key,data) {
    	tabnav += '<li class="contnav"><a href="#ma'+key+'" data-toggle="tab">'+ data.title +'</a></li>';
    	accitem += '<a href="#ma'+key+'" data-toggle="collapse" data-parent="#acc-cont" class="acc-nav"><div class="acc-title">'+ data.title +'</div></a><div class="conttext tab-pane" id="ma'+key+'">'+ data.content +'</div>';
	});
	$("#contlist .navlist").append(tabnav);
	$("#acc-cont .panel").append(accitem);
	getscreenwidth();
});

function getscreenwidth () {
	if ($(window).width() < 768) {
		$(".navlist .contnav").removeClass("active");
		$(".tab-content .conttext").removeClass("tab-pane active");
		$(".tab-content .conttext").addClass("collapse");
		$(".tab-content .conttext").css("height","auto");
		$(".tab-content .conttext:first").addClass("in");
	}
	else if ($(window).width() >= 768)  {
		$(".navlist .contnav").removeClass("active");
		$(".tab-content .conttext").removeClass("collapse active in");
		$(".tab-content .conttext").addClass("tab-pane");
		$(".tab-content .conttext:first").addClass("active");
		$(".navlist .contnav:first").addClass("active");
	}
	else {
		return 0;
	}
}

$(document).ready(function(){
	$(window).resize(function() {
		getscreenwidth();
	});
});