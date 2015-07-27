var next_btn = document.getElementById("next"),
	previous_btn = document.getElementById("previous"),
	play_btn = document.getElementById("play"),
	pause_btn = document.getElementById("pause"),
	mute_btn = document.getElementById("sound-mute"),
	unmute_btn = document.getElementById("sound-unmute"),
	navigation2 = document.getElementById("navi-list2");

var arrowClicked = true;
var audioloaded = false;
var muted = true;
var aud = new Audio();// you can change the src everytime you need it


var chapter1_currentpage = 1;
var chapter2_currentpage = 1;
var chapter3_currentpage = 1;
var chapter4_currentpage = 1;
var chapter5_currentpage = 1;
var chapter6_currentpage = 1;
var chapter7_currentpage = 1;
var chapter8_currentpage = 1;
var chapter1_total = 9;
var chapter2_total = 5;
var chapter3_total = 2;
var chapter4_total = 10;
var chapter5_total = 4;
var chapter6_total = 4;
var chapter7_total = 16;
var chapter8_total = 6;
var current_chapter = 1;


var chapter1 = ["page1","page2","page3","page4","page5","page6","page7","page8","page9"];
var chapter2 = ["","page10","page11","page12","page13","page14"];
var chapter3 = ["","page15","page16"];
var chapter4 = ["","page17","page18","page19","page20","page21","page22","page23","page24","page25","page26"];
var chapter5 = ["","page27","page28","page29","page30"];
var chapter6 = ["","page31","page32","page33","page34"];
var chapter7 = ["","page35","page36","page37","page38","page39","page40","page41","page42","page43","page44","page45","page46","page47","page48","page49","page50"];
var chapter8 = ["","page51","page52","page53","page54","page55","page56"];


next_btn.addEventListener("click",nextPage)
previous_btn.addEventListener("click",backPage)
unmute_btn.addEventListener("click",toggleSound);
mute_btn.addEventListener("click",toggleSound);
document.querySelector('nav a:nth-child(1) span').classList.add("selected");
document.querySelector('nav a:nth-child(1)').classList.add("selected");
document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "none";
document.querySelector('nav a:nth-child(3) span').style.pointerEvents = "none";
document.querySelector('nav a:nth-child(4) span').style.pointerEvents = "none";
document.querySelector('nav a:nth-child(5) span').style.pointerEvents = "none";
document.querySelector('nav a:nth-child(6) span').style.pointerEvents = "none";
document.querySelector('nav a:nth-child(7) span').style.pointerEvents = "none";
document.querySelector('nav a:nth-child(8) span').style.pointerEvents = "none";


function toggleSound(){
	if(muted){
		aud.volume = 1;
		muted = false;
		mute_btn.style.visibility = "hidden";
		unmute_btn.style.visibility = "visible";
	}else{
		aud.volume = 0;
		muted = true;
		mute_btn.style.visibility = "visible";
		unmute_btn.style.visibility = "hidden";
	}
	unmute_btn.style.pointerEvents = "auto";
	mute_btn.style.pointerEvents = "auto";
}

function disableControls(){
	mute_btn.style.visibility = "visible";
	unmute_btn.style.visibility = "hidden";
	muted = true;
	unmute_btn.style.pointerEvents = "none"
	mute_btn.style.pointerEvents = "none"
	next_btn.removeEventListener("click",nextPage);
	previous_btn.removeEventListener("click",backPage);
}

function nextPage() {
	disableControls();
	document.querySelector('iframe').classList.add("animationFadein");
	setTimeout(function(){document.querySelector('iframe').classList.remove("animationFadein"); next_btn.addEventListener("click",nextPage); previous_btn.addEventListener("click",backPage)},1000)
	if(chapter1_currentpage == chapter1_total && current_chapter == 1){
		current_chapter = 2;
	}else if(chapter2_currentpage == chapter2_total+1 && current_chapter == 2){
		current_chapter = 3;
	}else if(chapter3_currentpage == chapter3_total+1 && current_chapter == 3){
		current_chapter = 4;
	}else if(chapter4_currentpage == chapter4_total+1 && current_chapter == 4){
		current_chapter = 5;
	}else if(chapter5_currentpage == chapter5_total+1 && current_chapter == 5){
		current_chapter = 6;
	}else if(chapter6_currentpage == chapter6_total+1 && current_chapter == 6){
		current_chapter = 7;
	}else if(chapter7_currentpage == chapter7_total+1 && current_chapter == 7){
		current_chapter = 8;
	}


	console.log("current chapter: "+current_chapter);
	console.log("current page: "+chapter4_currentpage);
	if(current_chapter==1){
		
		if(arrowClicked){chapter2_currentpage = 1 }
		document.getElementById('iframe').src = "./pages/" + chapter1[chapter1_currentpage] + ".html";
		document.getElementById('progress-page').innerHTML = (chapter1_currentpage + 1).toString() + "/" +chapter1_total;
		chapter1_currentpage++;
		
		aud.src = 'audio/principles_audio.mp3';

	}else if(current_chapter==2){
		if(chapter1_currentpage == chapter1_total){
			if(arrowClicked){chapter3_currentpage = 1}
			document.querySelector('nav a:nth-child(1) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(2) span').classList.add("selected");
			document.querySelector('nav a:nth-child(1)').classList.remove("selected");
			document.querySelector('nav a:nth-child(2)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "Demonstration of a Product";
		}
		document.getElementById('iframe').src = "./pages/" + chapter2[chapter2_currentpage] + ".html";
		document.getElementById('progress-page').innerHTML = (chapter2_currentpage).toString() + "/" +chapter2_total;
		chapter2_currentpage++;
		if(document.getElementById('progress-page').innerHTML == "5/5"){
			document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(3) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(2) span').classList.add("done");

		}
	}
	else if(current_chapter==3){
		if(chapter2_currentpage == chapter2_total+1){
			console.log("here")
			chapter4_currentpage = 1
			document.querySelector('nav a:nth-child(2) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(3) span').classList.add("selected");
			document.querySelector('nav a:nth-child(2)').classList.remove("selected");
			document.querySelector('nav a:nth-child(3)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "Buyer and Seller";
		}
		document.getElementById('iframe').src = "./pages/" + chapter3[chapter3_currentpage] + ".html";
		document.getElementById('progress-page').innerHTML = (chapter3_currentpage).toString() + "/" +chapter3_total;
		chapter3_currentpage++;

		if(document.getElementById('progress-page').innerHTML == "2/2"){

			document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(3) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(4) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(3) span').classList.add("done");
		}

	}
	else if(current_chapter==4){
		if(chapter3_currentpage == chapter3_total+1){
			if(arrowClicked){chapter5_currentpage = 1}
			document.querySelector('nav a:nth-child(3) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(4) span').classList.add("selected");
			document.querySelector('nav a:nth-child(3)').classList.remove("selected");
			document.querySelector('nav a:nth-child(4)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "Golden Rule in selling Concept";
		}
		document.getElementById('iframe').src = "./pages/" + chapter4[chapter4_currentpage] + ".html";
		document.getElementById('progress-page').innerHTML = (chapter4_currentpage).toString() + "/" +chapter4_total;
		chapter4_currentpage++;

		if(document.getElementById('progress-page').innerHTML == "10/10"){

			document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(3) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(4) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(5) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(4) span').classList.add("done");
		}

	}
	else if(current_chapter==5){
		if(chapter4_currentpage == chapter4_total+1){
			if(arrowClicked){chapter6_currentpage = 1}
			document.querySelector('nav a:nth-child(4) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(5) span').classList.add("selected");
			document.querySelector('nav a:nth-child(4)').classList.remove("selected");
			document.querySelector('nav a:nth-child(5)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "The Buying Decision Process";
		}
		document.getElementById('iframe').src = "./pages/" + chapter5[chapter5_currentpage] + ".html";
		document.getElementById('progress-page').innerHTML = (chapter5_currentpage).toString() + "/" +chapter5_total;
		chapter5_currentpage++;

		if(document.getElementById('progress-page').innerHTML == "4/4"){

			document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(3) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(4) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(5) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(6) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(5) span').classList.add("done");
		}


	}else if(current_chapter==6){
		if(chapter5_currentpage == chapter5_total+1){
			if(arrowClicked){chapter7_currentpage = 1}
			document.querySelector('nav a:nth-child(5) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(6) span').classList.add("selected");
			document.querySelector('nav a:nth-child(5)').classList.remove("selected");
			document.querySelector('nav a:nth-child(6)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "The Selling Process Stages";
		}
		document.getElementById('iframe').src = "./pages/" + chapter6[chapter6_currentpage] + ".html";
		document.getElementById('progress-page').innerHTML = (chapter6_currentpage).toString() + "/" +chapter6_total;
		chapter6_currentpage++;

		if(document.getElementById('progress-page').innerHTML == "4/4"){

			document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(3) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(4) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(5) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(6) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(7) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(6) span').classList.add("done");
		}

	}else if(current_chapter==7){
		if(chapter6_currentpage == chapter6_total+1){
			if(arrowClicked){chapter8_currentpage = 1}
			document.querySelector('nav a:nth-child(6) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(7) span').classList.add("selected");
			document.querySelector('nav a:nth-child(6)').classList.remove("selected");
			document.querySelector('nav a:nth-child(7)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "The Steps to Selling";
		}
		document.getElementById('iframe').src = "./pages/" + chapter7[chapter7_currentpage] + ".html";
		document.getElementById('progress-page').innerHTML = (chapter7_currentpage).toString() + "/" +chapter7_total;
		chapter7_currentpage++;

		if(document.getElementById('progress-page').innerHTML == "16/16"){

 			document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(3) span').style.pointerEvents = "";			
			document.querySelector('nav a:nth-child(4) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(5) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(6) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(7) span').style.pointerEvents = "";
			document.querySelector('nav a:nth-child(7) span').style.pointerEvents = "";	
			document.querySelector('nav a:nth-child(7) span').classList.add("done");
 }


		

	}else if(current_chapter==8){
		
		if(chapter8_currentpage != 7){
			if(chapter7_currentpage == chapter7_total+1){
				chapter7_currentpage = 1;
				document.querySelector('nav a:nth-child(7) span').classList.remove("selected");
				document.querySelector('nav a:nth-child(8) span').classList.add("selected");
				document.querySelector('nav a:nth-child(7)').classList.remove("selected");
				document.querySelector('nav a:nth-child(8)').classList.add("selected");
				document.getElementById('progress-title').innerHTML = "The Brochure or Flyers";
			}
			document.getElementById('iframe').src = "./pages/" + chapter8[chapter8_currentpage] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter8_currentpage).toString() + "/" +chapter8_total;
			chapter8_currentpage++;

			if(document.getElementById('progress-page').innerHTML == "6/6"){
			document.querySelector('nav a:nth-child(8) span').style.pointerEvents = "";	
			document.querySelector('nav a:nth-child(8) span').classList.add("done");


		}
		}
		
	}
arrowClicked = true;
checkProgress();
}

function backPage() {
	disableControls();
	document.querySelector('iframe').classList.add("animationFadein");
	setTimeout(function(){document.querySelector('iframe').classList.remove("animationFadein"); next_btn.addEventListener("click",nextPage); previous_btn.addEventListener("click",backPage)},1000)

	if(chapter1_currentpage != 1){
		document.querySelector('iframe').classList.add("animationFadein");
		document.querySelector('iframe').classList.remove("animationFadein");
	}
	if(arrowClicked){
		if(chapter2_currentpage == 1 && current_chapter == 2){
			current_chapter = 1;
			console.log(">>>>>>>>>>>")
		}else if(chapter3_currentpage == 1 && current_chapter == 3){
			current_chapter = 2;
		}else if(chapter4_currentpage == 1 && current_chapter == 4){
			current_chapter = 3;
		}else if(chapter5_currentpage == 1 && current_chapter == 5){
			current_chapter = 4;
		}else if(chapter6_currentpage == 1 && current_chapter == 6){
			current_chapter = 5;
		}else if(chapter7_currentpage == 1 && current_chapter == 7){
			current_chapter = 6;
		}else if(chapter8_currentpage == 1 && current_chapter == 8){
			current_chapter = 7;
		}
	}else{
		arrowClicked = true;
	}
	console.log(current_chapter)
	
	if(current_chapter==1){
	
		if(chapter1_currentpage != 1){
			chapter1_currentpage--;
			document.getElementById('iframe').src = "./pages/" + chapter1[chapter1_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter1_currentpage).toString() + "/" + chapter1_total;
			checkProgress();
		}
	}else if(current_chapter==2){
		chapter2_currentpage--;
		if(chapter2_currentpage == 1){
			console.log(chapter1_currentpage)
			console.log(chapter2_currentpage)
			document.querySelector('nav a:nth-child(2) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(1) span').classList.add("selected");
			document.querySelector('nav a:nth-child(2)').classList.remove("selected");
			document.querySelector('nav a:nth-child(1)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "The Introduction to Selling Techniques";
			document.getElementById('iframe').src = "./pages/" + chapter1[chapter1_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter1_currentpage).toString() + "/" + chapter1_total;
		}else{
			document.getElementById('iframe').src = "./pages/" + chapter2[chapter2_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter2_currentpage-1).toString() + "/" + chapter2_total;
		}
	}else if(current_chapter==3){
		chapter3_currentpage--;
		if(chapter3_currentpage == 1){
			document.querySelector('nav a:nth-child(3) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(2) span').classList.add("selected");
			document.querySelector('nav a:nth-child(3)').classList.remove("selected");
			document.querySelector('nav a:nth-child(2)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "Demonstration of a Product";
			document.getElementById('iframe').src = "./pages/" + chapter2[chapter2_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter2_currentpage-1).toString() + "/" + chapter2_total;
		}else{
			document.getElementById('iframe').src = "./pages/" + chapter3[chapter3_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter3_currentpage-1).toString() + "/" + chapter3_total;
		}
		console.log(chapter3_currentpage)
	}else if(current_chapter==4){
		chapter4_currentpage--;
		console.log(chapter4_currentpage);
		if(chapter4_currentpage == 1){
			document.querySelector('nav a:nth-child(4) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(3) span').classList.add("selected");
			document.querySelector('nav a:nth-child(4)').classList.remove("selected");
			document.querySelector('nav a:nth-child(3)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "Buyer and Seller";
			document.getElementById('iframe').src = "./pages/" + chapter3[chapter3_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter3_currentpage-1).toString() + "/" + chapter3_total;
		}else{
			document.getElementById('iframe').src = "./pages/" + chapter4[chapter4_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter4_currentpage-1).toString() + "/" + chapter4_total;
		}
	}else if(current_chapter==5){
		chapter5_currentpage--;
		if(chapter5_currentpage == 1){
			document.querySelector('nav a:nth-child(5) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(4) span').classList.add("selected");
			document.querySelector('nav a:nth-child(5)').classList.remove("selected");
			document.querySelector('nav a:nth-child(4)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "Golden Rule in selling Concept";
			document.getElementById('iframe').src = "./pages/" + chapter4[chapter4_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter4_currentpage-1).toString() + "/" + chapter4_total;
		}else{
			document.getElementById('iframe').src = "./pages/" + chapter5[chapter5_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter5_currentpage-1).toString() + "/" + chapter5_total;
		}
	}else if(current_chapter==6){
		chapter6_currentpage--;
		if(chapter6_currentpage == 1){
			document.querySelector('nav a:nth-child(6) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(5) span').classList.add("selected");
			document.querySelector('nav a:nth-child(6)').classList.remove("selected");
			document.querySelector('nav a:nth-child(5)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "The Buying Decision Process";
			document.getElementById('iframe').src = "./pages/" + chapter5[chapter5_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter5_currentpage-1).toString() + "/" + chapter5_total;
		}else{
			document.getElementById('iframe').src = "./pages/" + chapter6[chapter6_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter6_currentpage-1).toString() + "/" + chapter6_total;
		}
	}else if(current_chapter==7){
		chapter7_currentpage--;
		if(chapter7_currentpage == 1){
			document.querySelector('nav a:nth-child(7) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(6) span').classList.add("selected");
			document.querySelector('nav a:nth-child(7)').classList.remove("selected");
			document.querySelector('nav a:nth-child(6)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "The Selling Process Stages";
			document.getElementById('iframe').src = "./pages/" + chapter6[chapter6_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter6_currentpage-1).toString() + "/" + chapter6_total;
		}else{
			document.getElementById('iframe').src = "./pages/" + chapter7[chapter7_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter7_currentpage-1).toString() + "/" + chapter7_total;
		}
	}else if(current_chapter==8){
		chapter8_currentpage--;
		if(chapter8_currentpage == 1){
			document.querySelector('nav a:nth-child(8) span').classList.remove("selected");
			document.querySelector('nav a:nth-child(7) span').classList.add("selected");
			document.querySelector('nav a:nth-child(8)').classList.remove("selected");
			document.querySelector('nav a:nth-child(7)').classList.add("selected");
			document.getElementById('progress-title').innerHTML = "The Steps to Selling";
			document.getElementById('iframe').src = "./pages/" + chapter7[chapter7_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter7_currentpage-1).toString() + "/" + chapter7_total;
		}else{
			document.getElementById('iframe').src = "./pages/" + chapter8[chapter8_currentpage-1] + ".html";
			document.getElementById('progress-page').innerHTML = (chapter8_currentpage-1).toString() + "/" + chapter8_total;
		}
	}	
checkProgress();
}

function navClick(e){
	document.querySelector('iframe').classList.add("animationFadein");
	setTimeout(function(){document.querySelector('iframe').classList.remove("animationFadein")},1000)
	arrowClicked = false;
	selectedPage(e);
	switch(e){

		case 1 : current_chapter = 1; 
				 chapter1_currentpage = 1;
				 document.getElementById('progress-title').innerHTML = "The Introduction to Selling Techniques";
				 document.getElementById('iframe').src = "./pages/" + chapter1[chapter1_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter1_currentpage).toString() + "/" + chapter1_total;break;
		case 2 : current_chapter = 2; 
				 chapter2_currentpage = 2;
				 document.getElementById('progress-title').innerHTML = "Demonstration of a Product";
				 document.getElementById('iframe').src = "./pages/" + chapter2[chapter2_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter2_currentpage-1).toString() + "/" + chapter2_total;break;
		case 3 : current_chapter = 3; 
				 chapter3_currentpage = 2;
				 document.getElementById('progress-title').innerHTML = "Buyer and Seller";
				 document.getElementById('iframe').src = "./pages/" + chapter3[chapter3_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter3_currentpage-1).toString() + "/" + chapter3_total;break;
		case 4 : current_chapter = 4; 
				 chapter4_currentpage = 2;
				 document.getElementById('progress-title').innerHTML = "Golden Rule in selling Concept";
				 document.getElementById('iframe').src = "./pages/" + chapter4[chapter4_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter4_currentpage-1).toString() + "/" + chapter4_total;break;
		case 5 : current_chapter = 5; 
				 chapter5_currentpage = 2;
				 document.getElementById('progress-title').innerHTML = "The Buying Decision Process";
				 document.getElementById('iframe').src = "./pages/" + chapter5[chapter5_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter5_currentpage-1).toString() + "/" + chapter5_total;break;
		case 6 : current_chapter = 6; 
				 chapter6_currentpage = 2;
				 document.getElementById('progress-title').innerHTML = "The Selling Process Stages";
				 document.getElementById('iframe').src = "./pages/" + chapter6[chapter6_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter6_currentpage-1).toString() + "/" + chapter6_total;break;
		case 7 : current_chapter = 7; 
				 chapter7_currentpage = 2;
				 document.getElementById('progress-title').innerHTML = "The Steps to Selling";
				 document.getElementById('iframe').src = "./pages/" + chapter7[chapter7_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter7_currentpage-1).toString() + "/" + chapter7_total;break;
		case 8 : current_chapter = 8; 
				 chapter8_currentpage = 2;
				 document.getElementById('progress-title').innerHTML = "The Brochure or Flyers";
				 document.getElementById('iframe').src = "./pages/" + chapter8[chapter8_currentpage-1] + ".html";
				 document.getElementById('progress-page').innerHTML = (chapter8_currentpage-1).toString() + "/" + chapter8_total;break;

	}
	checkProgress();
}

function selectedPage(e){
	chapter1_currentpage = 9;
	chapter2_currentpage = 6;
	chapter3_currentpage = 3;
	chapter4_currentpage = 11;
	chapter5_currentpage = 5;
	chapter6_currentpage = 5;
	chapter7_currentpage = 17;
	chapter8_currentpage = 7;
	for (var i = 1; i < 8; i++) {
		document.querySelector('nav a:nth-child('+i+') span').classList.remove("selected");
		document.querySelector('nav a:nth-child('+i+')').classList.remove("selected");
	};
	document.querySelector('nav a:nth-child('+e+')').classList.add("selected");
	document.querySelector('nav a:nth-child('+e+') span').classList.add("selected");
	
}

function callingMrLee(){
	if(document.getElementById("mrlee").style.display == "block"){return;};
	document.getElementById("mrlee").style.display = "block";
	document.getElementById("mrlee").classList.add("animationFadeLeft");
	setTimeout(function(){
		document.getElementById('mrlee').classList.remove("animationFadeLeft");
	},1000)
}

function exitMrLee(){
	if(document.getElementById("mrlee").style.display == "block"){
		document.getElementById('mrlee').classList.add("animationFadeOutLeft");
		setTimeout(function(){
			document.getElementById('mrlee').classList.remove("animationFadeOutLeft");
			document.getElementById("mrlee").style.display = "none";
		},1000)
	}
}

function checkProgress(){
	console.log(document.getElementById('progress-page').innerHTML + "current_chapter: "+ current_chapter);
	switch(current_chapter){
		case 1: if(document.getElementById('progress-page').innerHTML == "2/9"){
					aud.play();
					console.log("play audio");
					toggleSound();
				}
				else if(document.getElementById('progress-page').innerHTML == "9/9"){
					document.querySelector('nav a:nth-child(2) span').style.pointerEvents = "";
					document.querySelector('nav a:nth-child(1) span').classList.add("done");
				}else{
					aud.pause();
				}
				if(document.getElementById('progress-page').innerHTML == "8/9"||document.getElementById('progress-page').innerHTML == "9/9"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
		case 2: if(document.getElementById('progress-page').innerHTML == "5/5"||document.getElementById('progress-page').innerHTML == "9/9"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
		case 3: if(document.getElementById('progress-page').innerHTML == "5/5"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
		case 4: if(document.getElementById('progress-page').innerHTML == "9/10"||document.getElementById('progress-page').innerHTML == "10/10"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
		case 5: if(document.getElementById('progress-page').innerHTML == "4/4"||document.getElementById('progress-page').innerHTML == "10/10"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
		case 6: if(document.getElementById('progress-page').innerHTML == "4/4"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
		case 7: if(document.getElementById('progress-page').innerHTML == "15/16"||document.getElementById('progress-page').innerHTML == "16/16"||document.getElementById('progress-page').innerHTML == "4/4"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
		case 8: if(document.getElementById('progress-page').innerHTML == "5/6"||document.getElementById('progress-page').innerHTML == "16/16"){
					callingMrLee();
				}else{
					exitMrLee();
				}
				break;
	}
}
