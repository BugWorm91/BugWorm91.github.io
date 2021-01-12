$(function(){
		$("#side_contents").load("https://bugworm91.github.io/parts/frame_index.html", function(data, status, object) {
		$("#mobile_navigation").load("https://bugworm91.github.io/parts/mobile_menu.html");
		$("#sub_navigation").load("https://bugworm91.github.io/parts/sub.html");
		$("#news").load("https://bugworm91.github.io/parts/news.html");
	});
});
