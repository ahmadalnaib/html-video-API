const video=document.getElementById('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');



//functions for play and pause video
function toggleVideo()
{
if(video.paused){
  video.play();
} else {
  video.pause();
}
}

//functions for updateIcon play pause
function updateIcon()
{
  if(video.paused){
  play.innerHTML='<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML='<i class="fa fa-pause fa-2x"></i>';
  } 

}

//function for update progress
function updateProgress()
{
progress.value = (video.currentTime / video.duration) * 100;


// get min
let min=Math.floor(video.currentTime / 60);
if(min < 10) {
  min ='0'+String(min);
}
  // get sec
let sec=Math.floor(video.currentTime % 60);
if(sec < 10) {
  sec ='0'+String(sec);
}
timestamp.innerHTML=`${min}:${sec}`;
}

//functions for progress video and timestamp
function videoProgress()
{
video.currentTime= (+progress.value * video.duration) / 100;
}

//functions for stop video
function stopVideo()
{
video.currentTime=0;
video.pause();
}




//Event listeners
//video
video.addEventListener('click',toggleVideo);
video.addEventListener('pause',updateIcon);
video.addEventListener('play',updateIcon);
video.addEventListener('timeupdate',updateProgress);


//play
play.addEventListener('click',toggleVideo);

//stop
stop.addEventListener('click',stopVideo);

//progress
progress.addEventListener('change',videoProgress);



