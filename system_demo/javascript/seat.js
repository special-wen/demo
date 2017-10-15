'use strict'
let row,col;

let array = new Array();
for(let i = 0;i<8;i++){
    array[i] = new Array();
    for(let j = 0;j<8;j++){
        array[i][j] = 0;
    }

}
//添加座位
// array[i][j] = 0 座位正常
// array[i][j] = 1 座位选中
// array[i][j] = -1 座位坏掉
// array[i][j] = 2 改为过道
window.onload = function createState() {
    for(let i = 1;i<=8;i++){
        for(let j = 1;j<=8;j++) {
            let one = document.createElement('div');
            document.getElementById('seat').appendChild(one);
            one.setAttribute('class', 'oneDiv');
            let sateImage = document.createElement('img');
            let num = document.createElement('span');
            num.innerText = i + ',' + j;
            sateImage.setAttribute("class", "sate");
            sateImage.setAttribute("id", "sate"+i+j);
            sateImage.setAttribute('data-toggle', 'modal');
            sateImage.setAttribute('data-target', '#myModal');
            sateImage.src = '../System_manager/image/seat.png';
            sateImage.addEventListener('click', function getState() {
                row = i;
                col = j;
                array[i-1][j-1] = 1;
                let where = document.getElementById('title');
                where.innerHTML = '请选择第' + i + '行第' + j + '列状态：';
                //alert(sateImage.id);
                let select = sateImage.id;
                document.getElementById(select).src = '../System_manager/image/select.png'
                console.log(row, col);
            });
            let change = document.getElementById('update');
            change.onclick = function changeState() {
                let imageId = "sate"+row+col;
                //alert(imageId);
                let newState = document.getElementById(imageId);
                let seatState = document.getElementById('seatState');

                let index = seatState.selectedIndex;
                let value = seatState.options[index].value;
                if(value == 'active'){
                    array[row-1][col-1] = 0;
                    newState.src = '../System_manager/image/seat.png';
                    console.log('active');
                }
                else if(value == 'broken'){
                    array[row-1][col-1] = -1;
                    newState.src = '../System_manager/image/broken.png';

                    console.log('broken');

                }
                else if(value == 'aisle'){
                    array[row-1][col-1] = 2;
                    newState.src = '../System_manager/image/aisle.png';
                    console.log('aisle');
                }
             }
            one.appendChild(sateImage);
            one.appendChild(num);

        }
    }
}


