/** Created by ����ƽ on 2018/8/8.
*/
var btn1 = document.getElementById('btn1');
var audio = document.getElementById('audio');
var img = document.getElementById('img');
var img1 = document.getElementById('img1');
var kuaijin = document.getElementById('kuaijin');
var kuaitui = document.getElementById('kuaitui');
var xunhuan = document.getElementById('xunhuan');
var sound = document.getElementById('sound');
var progress = document.getElementById('progress');
var timeDate = document.getElementById('timeDate');
var bar = document.getElementById('bar');
var quan2= document.getElementById('quan2');



quan2.onmousedown = function(e){
    var e = e||window.event;
    console.log(e.clientX)
}
var isplay = true;
img.style.animationPlayState = 'paused';
btn1.onclick = function(){
    if (isplay){
        audio.play();
        img1.setAttribute("src","../IMAG/pause.png")
        img.style.animationPlayState = 'running';
        isplay = false;
    }else{
        audio.pause();
        img1.setAttribute("src","../IMAG/play.png")  ;
        img.style.animationPlayState = 'paused';
        isplay = true;
    }
};

kuaijin.onclick = function(){
    audio.currentTime += 10;
};

kuaitui.onclick = function(){
    audio.currentTime -= 10;
};
var isXun = true;
xunhuan.onclick = function(){
    if( isXun){
        xunhuan.src = "../IMAG/notCirculate.png";
        isXun = false;
        if(audio.currentTime == audio.duration){
            img1.src = "../IMAG/play.png";
            audio.currentTime = 0;
            audio.play();
        }
    }else{
        xunhuan.src = "../IMAG/circulate.png";
        isXun = true;
    }
};

var isSound = true;
sound.onclick = function(){
    if(isSound){
        sound.src = "../IMAG/silent.png";
        audio.volume = 0;
        isSound = false;
    }else{
        sound.src = "../IMAG/unquiet.png";
        audio.volume = 1;
        isSound = true;
    }
}