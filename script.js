$(function() {
	// Get Profile Picture
	$.getJSON("https://api.github.com/users/jetstream5500", function( json ) {
		//setUIColors(json["avatar_url"]);
		document.getElementById("profilePic").setAttribute("src",json["avatar_url"]);
	});
});

function setUIColors(profilePicSRC) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var profilePic = new Image();
	console.log(profilePic);
	//console.log(profilePicSRC);
	profilePic.src = profilePicSRC;
	//profilePic.width="250px";
	//profilePic.height="250px";
	ctx.drawImage(profilePic, 0, 0, profilePic.width, profilePic.height, 0, 0, 250, 250);
	//ctx.drawImage()
}