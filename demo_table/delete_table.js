'use strict'

//添加一行新的表格
function add() {
    let table = document.getElementById('table');

    let newRow = table.insertRow();
    let cell1 = newRow.insertCell();
    let cell2 = newRow.insertCell();
    let cell3 = newRow.insertCell();

    cell1.innerText = 'new1';
    cell2.innerText = 'new2';
    cell3.innerText = 'new3';

}

//指定删除某一行

function delRow() {

    let table = document.getElementById('table');
    let len = table.rows.length;

    table.deleteRow(len-2);

}

//删除所有的行

function allDel() {
    let table = document.getElementById("table");
    let len = table.rows.length;

    for(let i=0;i<len;i++){
        table.deleteRow(0);
    }
}

//删除指定的某一列

function delCol() {
    let table = document.getElementById('table');
    let len = table.rows.length;

    //删除指定的位置
    // table.rows[2].deleteCell(1);

    for(let i =0;i<len;i++){
        table.rows[i].deleteCell(1);
    }
}

//