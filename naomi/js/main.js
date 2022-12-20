jQuery(document).ready(function($){
	//this is used for the video effect only
	if( $('.cd-bg-video-wrapper').length > 0 ) {
		var videoWrapper = $('.cd-bg-video-wrapper'),
			mq = window.getComputedStyle(document.querySelector('.cd-bg-video-wrapper'), '::after').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
		if( mq == 'desktop' ) {
			// we are not on a mobile device 
			var	videoUrl = videoWrapper.data('video'),
				video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
			video.appendTo(videoWrapper);
			video.get(0).play();
		}
	}
});

gsap.to('.cd-intro',{display:"none",opacity:0,ease:"slow"})
const timeline = gsap.timeline({defaults:{duration:2}})
window.addEventListener("DOMContentLoaded",()=>{
    timeline
         .to('.top',{y:"-400%",delay:2,ease:"power2.in"})
         .to('span',{opacity:0,ease:"slow"})
         .to('main',{display:"none"})
		 .to('.cd-intro',{display:"table",opacity:1,ease:"slow"})
		 .to('span',{opacity:1,ease:"slow"})

        // .from(".text-box",{opacity:0,ease:"slow"})
})
