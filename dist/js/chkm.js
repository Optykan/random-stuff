if (window.innerWidth <= 798) {

	if ($.cookie('mobile') == '0'){
		console.log('User has opted to keep desktop version');
	}

	else{
		if(document.title == " Aspyre | Home | Mobile "){
			console.log('Already on mobile site! No redirect.');
		}
		else if($.cookie('mobile') == '1'){
			console.log('Mobile set, no redirect fix.')
		}
		else{
			mobile();
		}
	}
}
else{
	desktop();
}

function desktop(){
	$.cookie('mobile', '0', { expires: 7, path: '/'});
	console.log('Desktop request set.');
}
function mobile(){
	$.cookie('mobile', '1', { expires: 7, path: '/'});
	console.log("Mobile redirect ," + window.innerWidth + "px");
	window.location.replace("http://syang0525.github.io/m/index.html");

}