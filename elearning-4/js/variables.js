//PAGE Variables
var totalChapters = 7,//change to total chapters
	pagesPerChapter = [3,8,13,8,12,7,6], //change to number of pages per chapters separated in commas
	chapterTitles = ["CHAPTER 1 - GMB Sales Fundamentals Course 2","CHAPTER 2 - Customer Service Attitude","CHAPTER 3 - Customer is always Right","CHAPTER 4 - Managing Customer Expectations","CHAPTER 5 - Encourage customers to talk","CHAPTER 6 - Sales to Service","CHAPTER 7 - Social Awareness"],
	pageOfQuiz = [0,7,11,6,11,6,5],//number of the page where the quiz start. Note: can only be implemented on last 2 pages of the chapter
	pagesContentHolder = [],
	soundContentHolder = [],
	currentChapterPage =[],
	totalPages = 0,
	currentChapter = 0,
	navigationCurrentPage = [],
	content = "",
	arrowClicked = true,
	audioloaded = false,
	muted = true,
	isPlaying,
	changeChapter = false,
	pageEnd = false,
	isQuiz = false,
	aud = new Audio();

//Element Variables
var next_btn = document.getElementById("next"),
	previous_btn = document.getElementById("previous"),
	play_btn = document.getElementById("play"),
	pause_btn = document.getElementById("pause"),
	mute_btn = document.getElementById("sound-mute"),
	unmute_btn = document.getElementById("sound-unmute"),
	navigation2 = document.getElementById("navi-list2"),
	Iframe = document.getElementById('iframe'),
	progressPage = document.getElementById('progress-page'),
	pageTitle = document.getElementById('progress-title'),
	pointer = document.getElementById('pointer'),
	closeX = document.getElementById('closeX');


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
	//console.log("JS LOADED");
};

loadScript("js/createArray.js", jsLoaded);

