'use strict'

//鼠标移入
function getRow(obj) {
    if(event.srcElement.tagName == "TD"){
        let curRow=event.srcElement.parentElement;
        curRow.style.background="yellow";
    }
}

//鼠标移出
function breakRow(obj) {
    if(event.srcElement.tagName == "TD"){
        let curRow=event.srcElement.parentElement;
        curRow.style.background="#f2f2f2";
    }
}

//鼠标点击
function select(obj) {
    if (event.srcElement.tagName =='TD'){
        let curRow = event.srcElement.parentElement;
        curRow.style.background = 'blue';
        alert('这是第'+(curRow.rowIndex +1)+'行');
    }
}