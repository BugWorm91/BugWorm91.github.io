$(function(){
	$("#site_header").load("https://bugworm91.github.io/parts/header.html", function(){
			$('#wrapper').css('display', 'block');
	});
	$("#side_contents").load("https://bugworm91.github.io/parts/frame_csharp.html", function() {
		$("#mobile_navigation").load("https://bugworm91.github.io/parts/mobile_menu.html");
		$("#sub_navigation").load("https://bugworm91.github.io/parts/sub_menu.html");
		$("#news").load("https://bugworm91.github.io/parts/news.html");
	});
	$("#site_footer").load("https://bugworm91.github.io/parts/footer.html");
});
