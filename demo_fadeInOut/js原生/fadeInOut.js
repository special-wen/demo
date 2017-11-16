
window.onload = function () {
    function fadeIn(ele,speed,opacity){
        //ele需要进行淡入的元素
        //speed为淡入的速度
        //opacity淡入到指定的透明度
        speed = speed || 20;
        opacity = opacity || 100;
        //显示元素
        ele.style.display = 'block';
        //将透明度该为0
        ele.style.opacity = '0/100';

        //初始化透明度为0
        let opa = 0;
        //循环将透明度增加，以10增加。
        (function () {
            ele.style.opacity = opa;
            opa = opa +10;
            if(opa <= opacity){
                setTimeout(arguments.callee,speed);
            }
        })();
    }

    //淡出
    function fadeOut(ele,speed,opacity) {
        speed = speed || 20;
        opacity = opacity || 0;
        let opa = 100;
        (function () {

            ele.style.opacity = opa;
            opa = opa-5;
            if(opa >= opacity){
                setTimeout(arguments.callee,speed);
                console.log(opa);
            }else if(opa < 0){
                ele.style.display = 'none';
            }
        })();
    }

    document.getElementById("In").onclick = function () {
        let needFadeIn = document.getElementById("fadeIn");
        fadeIn(needFadeIn,3000);
    }

    document.getElementById("Out").onclick = function () {
        let needFadeOut = document.getElementById("fadeOut");
        alert('fadeOut');
        fadeOut(needFadeOut);
    }

    document.getElementById("To").onclick = function () {
        let needFadeTo = document.getElementById("fadeTo");
        fadeOut(needFadeTo,30,10);
    }

}

