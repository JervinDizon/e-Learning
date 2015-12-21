"use strict"
var content = "";

//LOADER FOR JS
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var jsLoaded = function() {
	console.log("JS LOADED");
};
loadScript("http://code.jquery.com/jquery-2.1.4.min.js", jsLoaded);
loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js", jsLoaded);
loadScript("../js/classList.min.js", jsLoaded);

for (var i = 1; i <= Object.keys(quiz["choices"]).length; i++) {
	content += (i == quiz["answer"]) ? "<div class='answer'>" : "<div>";
	content += "<span class='radio'><span><span></span></span></span>";
	content += "<span class='label'>"+quiz["choices"][i]+"</span>";
	content += "</div>"
}

setTimeout("window.top.postMessage('quizActive', '*')")

document.querySelector('.question').innerHTML = quiz["question"];
document.querySelector('.choices').innerHTML += content;
document.querySelector('.choices').addEventListener('click', choicesHandler);

function correctHandler(){
  document.querySelector('.message').className = (document.querySelector('.question.correct')) ? 'message show correct' : 'message show';
  (document.querySelector('.question.correct')) ? window.top.postMessage('correct', '*') : console.log("wrong answer");
};

function choicesHandler(e){
  document.querySelector('.message').className = 'message';
  console.log(this);
	for (var i = 1; i <= Object.keys(quiz["choices"]).length; i++) {
    console.log(this)
		try{document.querySelector(".choices > div:nth-child("+i+")").classList.remove('selected')}catch(e){};
	}
	switch(e.target.getAttribute('class')) {
    case 'answer':
  		e.target.className = "answer selected";
			for (var i = 1; i <= Object.keys(quiz["choices"]).length; i++) {
				document.querySelector(".choices > div:nth-child("+i+")").style.pointerEvents = "none";
			}
  		document.querySelector('.message').innerHTML = 'Correct! Click "Next" Button.';
  		document.querySelector('.message').className = 'message correct';
  		document.querySelector('.question').classList.add('correct');
			document.querySelector('.choices').removeEventListener('click', choicesHandler);
      TweenLite.fromTo($('.message'), 1, { opacity: 0, scale:.3}, { opacity: 1, scale:1, ease: Bounce.easeOut, y: 0, onComplete:correctHandler});
      break;
    default:
  		e.target.className = "selected";
  		document.querySelector('.message').innerHTML = "Wrong. Try Again!"
  		document.querySelector('.message').className = 'message wrong';
      TweenLite.fromTo($('.message'), 1, { opacity: 0, scale:.3}, { opacity: 1, scale:1, ease: Bounce.easeOut, y: 0 });
	}
};

				