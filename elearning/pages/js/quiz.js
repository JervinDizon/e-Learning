"use strict"
var content = "";

for (var i = 1; i <= Object.keys(quiz["choices"]).length; i++) {
	content += (i == quiz["answer"]) ? "<div class='answer'>" : "<div>";
	content += "<span class='radio'><span><span></span></span></span>";
	content += "<span class='label'>"+quiz["choices"][i]+"</span>";
	content += "</div>"
}

document.querySelector('.question').innerHTML = quiz["question"];
document.querySelector('.choices').innerHTML += content;
document.querySelector('.choices').addEventListener('click', choicesHandler);

document.querySelector('#message').addEventListener("animationend",function(){
	document.querySelector('.message').className = (document.querySelector('.question.correct')) ? 'message show correct' : 'message show';
	(document.querySelector('.question.correct')) ? window.top.postMessage('correct', '*') : console.log("wrong answer");
});

function choicesHandler(e){
  document.querySelector('.message').className = 'message';
	for (var i = 1; i <= Object.keys(quiz["choices"]).length; i++) {
		document.querySelector(".choices > div:nth-child("+i+")").classList.remove('selected')
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
      break;
    default:
  		e.target.className = "selected";
  		document.querySelector('.message').innerHTML = "Wrong. Try Again!"
  		document.querySelector('.message').className = 'message wrong';
	}
};

				