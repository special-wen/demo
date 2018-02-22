'use strict';

var img = document.getElementById('img');
var list = document.getElementById('index').getElementsByTagName('li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var index = 0;
var timer;

var moveImg =function(offset) {
    var newLeft = parseInt(img.style.left) + offset;
    img.style.left = newLeft + 'px';
    if (newLeft > 0) {
        img.style.left = -2400 + 'px';
    }
    if (newLeft < -2400) {
        img.style.left = 0 + 'px';
    }
};

var moveIndex=function(list, index) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].className === "on") {
            list[i].className = "";
        }
    }
    list[index].className = "on";
};

var nextMove=function(){
    index+=1;
    if(index>5){
        index=0;
    }
    moveImg(-600);
    moveIndex(list,index);
};

var preMove=function(){
    index-=1;
    if(index<0){
        index=5;
    }
    moveImg(600);
    moveIndex(list,index);
};

prev.onclick = function () {
    clearInterval(timer);
    preMove();
    play();
};

next.onclick = function () {
    clearInterval(timer);
    nextMove();
    play();
};

for (var i = 0; i < list.length; i++) {
    list[i].index = i;
    list[i].onmouseover = function () {
        var clickIndex = this.index;
        var offset = 600 * (index - clickIndex);
        moveImg(offset);
        index = clickIndex;
        moveIndex(list, index);
        clearInterval(timer);
    };
    list[i].onmouseout = function () {
        play();
    };
}

var play=function() {
    timer = setInterval(function () {
        nextMove();
    }, 3000)
};
play();