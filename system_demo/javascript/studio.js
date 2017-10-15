'use strict'
let number = 0;
//添加演出厅
function addStudio() {
    let studioAdd = document.getElementById('studio');

    let name = document.getElementById('studioName').value;
    let row = document.getElementById('sateRow').value;
    let col = document.getElementById('sateCol').value;
    let state = document.getElementById('studioState').value;
    let introduction = document.getElementById('studioIntroduction').value;

    let newRow = studioAdd.insertRow();

    let studioName = newRow.insertCell();
    let seatRow = newRow.insertCell();
    let seatCell = newRow.insertCell();
    let studioState = newRow.insertCell();
    let studioInroduction = newRow.insertCell();

    studioName.innerText = name;
    seatRow.innerText = row;
    seatCell.innerText = col;
    studioState.innerText = state;
    studioInroduction.innerText = introduction;

}


//鼠标点击事件
function studioRow(obj) {
    let table = document.getElementById('studio');
    let length = table.rows.length;

    for(let i = 0;i<length;i++){
        if(i == 0){
            let row = table.rows[i];
            row.setAttribute('class','warning');
        }
        else if(i%2 != 0 && i != 0){
            let row = table.rows[i];
            row.setAttribute('class','active');
        }else{
            let row = table.rows[i];
            row.setAttribute('class','default');
        }
    }

    if(event.srcElement.tagName == 'TD'){
        let num = 0;
        let curRow = event.srcElement.parentElement;
        //let rowContainer = curRow.innerHTML;

        if(curRow.rowIndex == 0){
            curRow.setAttribute('class','warning');
            return 0;
        }
        else{
            curRow.setAttribute('class','info');
            num = curRow.rowIndex ;
            console.log(num);
            number = num;
        }
    }

}

//删除某一行
function deleteRow(row) {
    let deleteRow = document.getElementById('studio');
    deleteRow.deleteRow(row);
}

//删除演出厅
function removeStudio() {
    let row = number;
    if(row > 0){
        console.log(row);
        deleteRow(row);
    }else{
        let changeButton = document.getElementById('deleteStudio');
        changeButton.setAttribute('data-toggle', 'modal');
        changeButton.setAttribute('data-target', '#error');
        let text = document.getElementById('waring');
        text.innerHTML = '请选择需要删除的地方！'
    }
}


//获取选中行的信息
function changeRow(number) {
    let array = [];
    let table = document.getElementById('studio');
    let length = table.rows.length;
    console.log(length);
    for(let i = 0;i<length;i++){
        array[i] = table.rows[number].cells[i].innerHTML;
        console.log(array[i]);
    }
    return array
}

//将信息添加在修改信息的相应位置
function change() {
    if(number > 0){
        let change = [];
        let array = changeRow(number);
        change[0] = document.getElementById('changeName');
        change[1] = document.getElementById('changeRow');
        change[2] = document.getElementById('changeCol');
        change[3] = document.getElementById('changeState');
        change[4] = document.getElementById('changeInt');
        let len = array.length;
        for(let i = 0;i<len;i++){
            change[i].value = array[i];
        }
    }
    else{
        console.log('aaa');
        let changeButton = document.getElementById('changeStudio');
        changeButton.setAttribute('data-toggle', 'modal');
        changeButton.setAttribute('data-target', '#error');
        let text = document.getElementById('waring')
        text.innerHTML = '请选择需要修改的地方！'
    }

}

function check() {
    let aaa = document.getElementById('studioName').value;


    console.log(aaa);
    if(/^.{2,20}$/.test(aaa)){
        document.getElementById('err').innerHTML = 'err:演出厅名称为2～20个字符！';
    }
    else{
        document.getElementById('err').innerHTML = '';
    }
}


function check1() {
    let aaa = document.getElementById('sateRow').value;
    console.log(aaa);
    if(/^([1-9])|(1[0-5])$/.test(aaa)){
        document.getElementById('err1').innerHTML = 'err:演出厅中座位的行数最多为15！';
    }else{
        document.getElementById('err1').innerHTML = '';
    }
}

function check2() {
    let aaa = document.getElementById('sateCol').value;
    console.log(aaa);
    if(/^([1-9])|(1[0-5])$/.test(aaa)){
        document.getElementById('err2').innerHTML = 'err:演出厅列数最多为15！';
    }else{
        document.getElementById('err2').innerHTML = '';
    }
}

function check3() {
    let aaa = document.getElementById('studioState').value;
    console.log(aaa);
    if(/^.{2,10}$/.test(aaa)){
        document.getElementById('err3').innerHTML = 'err:演出厅状态最多为10个字符！';
    }else{
        document.getElementById('err3').innerHTML = '';
    }
}

function check4() {
    let aaa = document.getElementById('changeName').value;
    console.log(aaa);
    if(/^.{2,20}$/.test(aaa)){
        document.getElementById('err4').innerHTML = 'err:演出厅名称为2～20个字符！';
    }else{
        document.getElementById('err4').innerHTML = '';
    }
}


function check5() {
    let aaa = document.getElementById('changeRow').value;
    console.log(aaa);
    if(/^([1-9])|(1[0-5])$/.test(aaa)){
        document.getElementById('err5').innerHTML = 'err:演出厅中座位的行数最多为15！';
    }else{
        document.getElementById('err5').innerHTML = '';
    }
}

function check6() {
    let aaa = document.getElementById('changeCol').value;
    console.log(aaa);
    if(/^([1-9])|(1[0-5])$/.test(aaa)){
        document.getElementById('err6').innerHTML = 'err:演出厅列数最多15！';
    }else{
        document.getElementById('err6').innerHTML = '';
    }
}

function check7() {
    let aaa = document.getElementById('changeState').value;
    console.log(aaa);
    if(/^.{2,10}$/.test(aaa)){
        document.getElementById('err3').innerHTML = 'err:演出厅状态最多为10个字符！';
    }else{
        document.getElementById('err3').innerHTML = '';
    }
}

