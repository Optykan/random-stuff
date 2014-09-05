function dismiss(){
	document.getElementById('alert').style.opacity="0";
	$.cookie('dismiss', '1', { expires: 7, path: '/'});
	console.log('Set dismiss cookie');
}
function hide(){
	document.getElementById('alert').style.opacity="0";
}
function menu(){
	if($.cookie('toggle')=="0"){
		//document.getElementById('nav-content').style.height="50px";
		document.getElementById('nav-content').style.opacity="1";
		$.cookie('toggle', '1', { expires: 7, path: '/'});
		console.log("1");
	}
	else{
		//document.getElementById('nav-content').style.height="300px";
		document.getElementById('nav-content').style.opacity="0";
	 	$.cookie('toggle', '0', { expires: 7, path: '/'});
	 	console.log($.cookie('toggle'));
	}
}