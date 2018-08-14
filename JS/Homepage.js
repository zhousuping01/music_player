/**
 * Created by ÷‹Àÿ∆Ω on 2018/8/12.
 */
window.onload = function(){
    var txt1 = document.getElementById('txt1');
    var zhi1 = document.getElementById('zhi1');
    var zhi2 = document.getElementById('zhi2');
    var zhi3 = document.getElementById('zhi3');
    var di = document.getElementById('di');
    var about = document.getElementById('about');
    var choose3 = document.getElementById('choose3');
    var choose1 = document.getElementById('choose1');
    var choose2 = document.getElementById('choose2');
    var focus = document.getElementById('focus');
    var fans = document.getElementById('fans');
    var img1 = document.getElementById('img1');


    var mobileWidth = window.innerWidth;
    var mobileHeight = window.innerHeight;
    document.body.style.width = mobileWidth;
    document.body.style.height = mobileHeight;
    choose1.style.width = 30.2 + 'vw';

    //alert(zhi1.innerHTML);
    function add(t){
        t = parseInt(t) + 1;
        return t;
    }

    txt1.onclick = function(){
        zhi3.innerHTML =add(zhi3.innerHTML);
        //alert(zhi1.innerHTML );
    }
    about.onclick = function(){
        choose1.style.width = 30.2 + 'vw';
        choose2.style.width = 0 + 'vw';
        choose3.style.width = 0 + 'vw';
        img1.style.opacity = 0.7;
    }
    focus.onclick = function(){
        choose2.style.width = 30.2 + 'vw';
        choose1.style.width = 0 + 'vw';
        choose3.style.width = 0 + 'vw';
        img1.style.opacity = 0;
    }
    fans.onclick = function(){
        choose2.style.width = 0 + 'vw';
        choose1.style.width = 0 + 'vw';
        choose3.style.width = 30.2 + 'vw';
        img1.style.opacity = 0;
    }

}