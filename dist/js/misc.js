function dismiss(){
	document.getElementById('alert').style.opacity="0";
	$.cookie('dismiss', '1', { expires: 7, path: '/'});
	console.log('Set dismiss cookie');
}
function hide(){
	document.getElementById('alert').style.opacity="0";
}
function menu(){
$.cookie('dismiss', '1', { expires: 7, path: '/'});
	if(toggle=="1"){
		document.getElementById('nav-content').style.height="300px";
		alert(toggle);
	}

	else if(toggle=="0"){
		document.getElementById('nav-content').style.height="75px";
		window.toggle="1";
		console.log("1");
	}
}