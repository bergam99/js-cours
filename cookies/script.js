function showPopUp() {
	
	var width = 500;
	var height = 500;
	
	var left = (window.screen.width / 2) - (width/2);
	var top = (window.screen.height / 4);
	
	var windowStatus = 'width='+width+', height='+height+', left='+left+', top='+top+', scrollbars=yes, status=yes, resizable=yes, titlebar=yes';
	
    	const url = "cookies.html";

	window.open(url, "hello popup", windowStatus);
}