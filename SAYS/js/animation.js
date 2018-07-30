var mousedownY = 0;
var mousedownX = 0;
var mouseendY = 0;
var mouseendX = 0;
var stepX = 0;
var imgIndex = 0;
var mysays;

window.onload = function() {
	window.setInterval("moveAuto()", 1000);
	mysays = window.setInterval("experienceMoveAuto()", 3000);

	var journalImg = document.getElementById("journalImg");
	journalImg.addEventListener("touchstart", function(event) {
		mousedownX = event.touches[0].pageX;
		console.log(mousedownX, "鼠标开始位置")
	});
	journalImg.addEventListener("touchend", function(event) {
		mouseendX = event.changedTouches[0].pageX;
		stepX = mouseendX - mousedownX;
		imgSliderNext(stepX);
		console.log(event.changedTouches[0].pageY, "鼠标结束位置")
	});

	var body = document.getElementById("viewBody");
	body.addEventListener("touchstart", function(event) {
		mousedownY = event.touches[0].pageY;
	});
	body.addEventListener("touchend", function(event) {
		mouseendY = event.changedTouches[0].pageY;
		if(mousedownY - mouseendY > 50) {
			moveNext();
		}
		if(mouseendY - mousedownY > 50) {
			moveBefore();
		}

	});
	var influencelist = document.getElementById("influenceList");
	influencelist.addEventListener("touchstart", function(event) {
		mousedownX = event.touches[0].pageX;
		console.log(mousedownX, "鼠标开始位置")
	});
	influencelist.addEventListener("touchend", function(event) {
		mouseendX = event.changedTouches[0].pageX;
		stepX = mouseendX - mousedownX;
		sliderNext(stepX);
		console.log(event.changedTouches[0].pageY, "鼠标结束位置")
	});

}

function imgSliderNext(stepX) {
	console.log(imgIndex);
	if(stepX > 0) {
		if(imgIndex >= 2) {
			imgIndex -= 2;
			clearInterval(mysays);
			experienceMoveAuto()
		}
	}
	if(stepX < 0) {
		clearInterval(mysays);
		experienceMoveAuto()
		console.log("右移")
	}
	mysays = window.setInterval("experienceMoveAuto()", 3000);
}

function experienceMoveAuto() {
	var journalImg = document.getElementById("journalImg");
	var writerImgList = document.getElementById("writerImgList");
	var journalFirstLarge = document.getElementById("journalFirstLarge");
	var journalSecondLarge = document.getElementById("journalSecondLarge");
	var journalThreeLarge = document.getElementById("journalThreeLarge");
	var journalFourLarge = document.getElementById("journalFourLarge");
	var journalFiveLarge = document.getElementById("journalFiveLarge");
	var tem = imgIndex % 6;
	//		if(tem == 0) {
	//			journalFirstLarge.style.transform = "scale(2)";
	//			journalFirstLarge.style.transition = "all 1s ease-in-out"
	//			setTimeout(function() {
	//				journalFirstLarge.style.transform = "scale(1)";
	//				journalFirstLarge.style.transition = "all 1s ease-in-out"
	//			}, 1000);
	//		}
	switch(tem) {
		case 0:
			journalFirstLarge.style.transform = "scale(2)";
			journalFirstLarge.style.transition = "all 1s ease-in-out";
			setTimeout(function() {
				journalFirstLarge.style.transform = "scale(1)";
				journalFirstLarge.style.transition = "all 1s ease-in-out"
			}, 1000);
		case 1:
			journalSecondLarge.style.transform = "scale(2)";
			journalSecondLarge.style.transition = "all 1s ease-in-out";
			setTimeout(function() {
				journalSecondLarge.style.transform = "scale(1)";
				journalSecondLarge.style.transition = "all 1s ease-in-out"
			}, 1000);
		case 3:
			journalThreeLarge.style.transform = "scale(2)";
			journalThreeLarge.style.transition = "all 1s ease-in-out";
			setTimeout(function() {
				journalThreeLarge.style.transform = "scale(1)";
				journalThreeLarge.style.transition = "all 1s ease-in-out"
			}, 1000);
		case 4:
			journalFourLarge.style.transform = "scale(2)";
			journalFourLarge.style.transition = "all 1s ease-in-out";
			setTimeout(function() {
				journalFourLarge.style.transform = "scale(1)";
				journalFourLarge.style.transition = "all 1s ease-in-out"
			}, 1000);
		case 5:
			journalFiveLarge.style.transform = "scale(2)";
			journalFiveLarge.style.transition = "all 1s ease-in-out";
			setTimeout(function() {
				journalFiveLarge.style.transform = "scale(1)";
				journalFiveLarge.style.transition = "all 1s ease-in-out"
			}, 1000);
		default:
	}
	//-161.6
	writerImgList.style.left = -341.6 * tem - 91 + "px"
	journalImg.style.left = -341.6 * tem - 91 + "px"
	imgIndex += 1;
}

function moveAuto() {
	var caseShow = document.getElementById("caseShow");
	if(isNaN(parseInt(caseShow.style.left))) {
		caseShow.style.left = "-110px";
	}
	var temp = parseInt(caseShow.style.left) - 202;
	caseShow.style.transition = "left 0.5s";
	caseShow.style.left = temp + "px";

	setTimeout(function() {
		if(parseInt(caseShow.style.left) <= -1010) {
			caseShow.style.transition = "left 0s";
			caseShow.style.left = "-110px";
		}
	}, 500)

}

function sliderNext(stepX) {
	var influencelist = document.getElementById("influenceList");
	console.log(stepX, "移动位置");
	if(isNaN(parseInt(influencelist.style.left))) {
		influencelist.style.left = "0px";
	}
	var tem = parseInt(influencelist.style.left) + stepX

	document.getElementById("influenceList").style.left = tem + "px";
	console.log("右移");
	if(parseInt(influencelist.style.left) < -525) {
		influencelist.style.left = "-562px"
	}
	if(parseInt(influencelist.style.left) > 0) {
		influencelist.style.left = "0px"
	}

}

function moveNext(e) {
	if(parseInt(document.getElementById("viewBody").style.top) != -600) {
		if(isNaN(parseInt(document.getElementById("viewBody").style.top))) {
			document.getElementById("viewBody").style.top = "0vh"
		}
		console.log(parseInt(document.getElementById("viewBody").style.top), "jjjj");
		var temp = parseInt(document.getElementById("viewBody").style.top) - 100;
		document.getElementById("viewBody").style.top = temp + "vh";
	}
}

function moveBefore(e) {
	if(parseInt(document.getElementById("viewBody").style.top) != 0) {
		if(isNaN(parseInt(document.getElementById("viewBody").style.top))) {
			document.getElementById("viewBody").style.top = "0vh"
		}
		console.log(parseInt(document.getElementById("viewBody").style.top), "jjjj");
		var temp = parseInt(document.getElementById("viewBody").style.top) + 100;
		document.getElementById("viewBody").style.top = temp + "vh";
	}
}