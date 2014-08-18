function dismiss(){
	document.getElementById('alert').style.opacity="0";
	$.cookie('dismiss', '1', { expires: 7, path: '/'});
	console.log('Set dismiss cookie');
}