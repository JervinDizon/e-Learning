"use strict";
(function(){
	var currentProgress;
	var pageShowed = false;

	var Preload = function(path) {
		this.path = path;
		this.queue = new createjs.LoadQueue(true);
		this.queue.on('complete', this.onComplete);
		this.queue.on('error', this.onError);
		this.queue.on('fileload', this.onFileLoad);
		this.queue.on('fileprogress', this.onFileProgress);
		this.queue.on('progress', this.onProgress);
	}

	Preload.prototype.setPreload = function(){
		this.items = [
			{id:'images/background_final.png',src:this.path+'images/background_final.png'},
			{id:'images/bgpapers.png',src:this.path+'images/bgpapers.png'},
			{id:'images/close.png',src:this.path+'images/close.png'},
			{id:'images/hand-pointer.png',src:this.path+'images/hand-pointer.png'},
			{id:'images/mrlee.png',src:this.path+'images/mrlee.png'},
			{id:'images/next.png',src:this.path+'images/next.png'},
			{id:'images/pause_button.png',src:this.path+'images/pause_button.png'},
			{id:'images/play_button.png',src:this.path+'images/play_button.png'},
			{id:'images/prev.png',src:this.path+'images/prev.png'},
			{id:'images/sound_mute.png',src:this.path+'images/sound_mute.png'},
			{id:'images/sound_unmute.png',src:this.path+'images/sound_unmute.png'},
			{id:'images/thumblock.png',src:this.path+'images/thumblock.png'},
			{id:'pages/images/cognizant.png',src:this.path+'pages/images/cognizant.png'},
			{id:'pages/images/cognizant.png',src:this.path+'pages/images/appreciative.png'},
			{id:'pages/images/arrow.png',src:this.path+'pages/images/arrow.png'},
			{id:'pages/images/board.png',src:this.path+'pages/images/board.png'},
			{id:'pages/images/bubble.png',src:this.path+'pages/images/bubble.png'},
			{id:'pages/images/c.png',src:this.path+'pages/images/c.png'},
			{id:'pages/images/chatting.png',src:this.path+'pages/images/chatting.png'},
			{id:'pages/images/cloud.png',src:this.path+'pages/images/cloud.png'},
			{id:'pages/images/conversation.png',src:this.path+'pages/images/conversation.png'},
			{id:'pages/images/critical.png',src:this.path+'pages/images/critical.png'},
			{id:'pages/images/cycle.png',src:this.path+'pages/images/cycle.png'},
			{id:'pages/images/discrimination.png',src:this.path+'pages/images/discrimination.png'},
			{id:'pages/images/ear.png',src:this.path+'pages/images/ear.png'},
			{id:'pages/images/empathic.png',src:this.path+'pages/images/empathic.png'},
			{id:'pages/images/face.png',src:this.path+'pages/images/face.png'},
			{id:'pages/images/filter.png',src:this.path+'pages/images/filter.png'},
			{id:'pages/images/head.png',src:this.path+'pages/images/head.png'},
			{id:'pages/images/hear.png',src:this.path+'pages/images/hear.png'},
			{id:'pages/images/informative.png',src:this.path+'pages/images/informative.png'},
			{id:'pages/images/line.png',src:this.path+'pages/images/line.png'},
			{id:'pages/images/man.png',src:this.path+'pages/images/man.png'},
			{id:'pages/images/mark.png',src:this.path+'pages/images/mark.png'},
			{id:'pages/images/octagon.png',src:this.path+'pages/images/octagon.png'},
			{id:'pages/images/oval.png',src:this.path+'pages/images/oval.png'},
			{id:'pages/images/pencil.png',src:this.path+'pages/images/pencil.png'},
			{id:'pages/images/pyramid.png',src:this.path+'pages/images/pyramid.png'},
			{id:'pages/images/reveal.png',src:this.path+'pages/images/reveal.png'},
			{id:'pages/images/skills.png',src:this.path+'pages/images/skills.png'},
			{id:'pages/images/smart.png',src:this.path+'pages/images/smart.png'},
			{id:'pages/images/steps.png',src:this.path+'pages/images/steps.png'},
			{id:'pages/page0.html',src:this.path+'pages/page0.html'},
			{id:'pages/images/tag.png',src:this.path+'pages/images/tag.png'}
		];

		this.pushItems("thumbmod03c","images/",".png",8);
		this.pushItems("box","pages/images/",".png",3);
		this.pushItems("smiley","pages/images/",".png",11);
		this.pushItems("smart","pages/images/",".png",6);
		this.pushItems("page","pages/",".html",67);
		this.pushItems("audio","audio/",".mp3",67);
	};

	Preload.prototype.pushItems = function(name,path,ext,count){
		for (var i = 1; i < count; i++) {
			this.items.push({id:path+name+i+ext,src:this.path+path+name+i+ext});
		};
	};
	Preload.prototype.loadManifest = function(){
		this.queue.loadManifest(this.items);
	};

	Preload.prototype.onComplete = function(event){
		 //console.log('Complete', event);
	};

	Preload.prototype.onError = function(event){
		// console.log('Error', event);
	};

	Preload.prototype.onFileLoad = function(event){
		// console.log('File Loaded', event);
	};

	Preload.prototype.onFileProgress = function(event){
		// console.log('File Progress', event.item.id);
	};

	Preload.prototype.onProgress = function(event){
		// console.log(Math.round(event.loaded * 100));
		currentProgress = event.loaded * 1.5;
		//console.log(Math.round(currentProgress * 100));
		var anim = "";
			anim += "-webkit-transition: width 500ms ease-in-out;";
			anim += "-moz-transition: width 500ms ease-in-out;";
			anim += "transition: width 500ms ease-in-out;";
			anim += "width: " + Math.round(currentProgress * 100) + "%;";
		if(Math.round(currentProgress * 100) <= 100){
			document.querySelector('.preloader .progress-bar .mask').style.cssText = anim;
			document.querySelector('.preloader .progress-bar .mask').style.width = Math.round(currentProgress * 100) + "%";
			document.querySelector('.preloader .progress-bar .progress-text').innerHTML = "Initializing Content... " + Math.round(currentProgress * 100) + "%";
		}else if(Math.round(currentProgress * 100) == 101){
			if(!pageShowed){
				pageShowed = true;
				preload.showContent();
			}
		}
	};

	Preload.prototype.showContent = function(){
		setTimeout(function(){
			document.querySelector('.main-wrapper').style.top = "0";
			document.querySelector('.main-wrapper').classList.add("animationFadein");
			document.querySelector('.preloader').style.display = "none";
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'js/variables.js';
			head.appendChild(script);
		},1000)
		setTimeout(function(){
			$("nav a span").after("<div class='blocker'></div>");
		},3000)
	}

	//var preload = new Preload("http://jervindizon.github.io/elearning-3/");
	var preload = new Preload(""); 

	preload.setPreload();
	preload.loadManifest();

	//-- Refresh contents to extend expiration from cache
	setInterval(function(){
		preload.loadManifest();
	},150000)
})();