## 以前每次做ttms中的座位管理时，用的都是插件，突然就想自己写一个原生的座位管理了。先附上一张成果图。
> 座位管理的界面：

![这里写图片描述](http://img.blog.csdn.net/20171111174200029?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2VuX3NwZWNpYWw=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
> 座位管理的修改座位状态:

![这里写图片描述](http://img.blog.csdn.net/20171111174352428?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2VuX3NwZWNpYWw=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
>座位管理中修改座位状态之后：

![这里写图片描述](http://img.blog.csdn.net/20171111174542003?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2VuX3NwZWNpYWw=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

## 界面有些丑陋，但是基本的功能还是已经实现了的。包括动态的生成座位，改变座位的状态。因为只是一个界面所以数据都是假数据。在之后连数据库后会进一步的完善。
### 需要用到的技术：html,bootstrap,css,js;(个人因为jq用的不熟练，所以没有选择jq)
### 代码可能有些繁琐，大家可以优化代码，我个人也会持续优化;
### 首先，关于座位的动态生成：
#### 在之前中，写到了动态生成表格。其实思想集合是相同的。可以去动态的创建图片，如果说不需要具体的座位的行列值可以直接通过两层循环动态创建图片。但如果是需要和我一样需要具体的行列值，可以尝试讲创建的座位和行列值放在一个div中去实现。主要通过```createElement```方法实现。具体代码实现如下：
```javascript
'use strict'
let row,col;
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
            sateImage.src = '../System_manager/image/seat.png';
      }
    }
}
```
> 在添加上的元素中通过setAttributet方法为他们添加样式，我就不附上自己的css代码了，大家可以根据自己的需求自己去写相应的css代码。
### 为每一个添加的座位创建监听事件
#### 在上一个代码中，每一次生成一个座位为他们添加一个鼠标点击事件：```sateImage.addEventListener('click', function getState(){});```去实现对每一个座位的操作而且这样还可以很轻易的获得正在操作的座位对应的行列号。具体实现如下：
```javascript
//用于记录座位的行列：
let row,col;
//在上一个代码中生成座位时添加监听事件：
sateImage.addEventListener('click', function getState() {
    row = i;
    col = j;
    //检测我们的代码是否正确
    alert（'第' + i + '行第' + j + '列'）;
    //获取到座位的id;
    let select = sateImage.id;
    //将选中的座位更改状态为选定状态：
    document.getElementById(select).src = '../System_manager/image/select.png';
});
```
### 获取到选择的座位之后，更改它们的状态
#### 首先我们可以通过一个数组去存放每个座位的状态值。比如说0代表座位正常，1代表座位选中，-1代表座位坏掉，2代表改为过道。那么之后的就更加的方便去实现了。
#### 选择座位后会有一个弹出框，在弹出框去选择需要对这个座位的更改，并在点击“提交更改”之后更改那个座位的图片。
> html代码：弹出框的实现。(通过bootstrap中的模态框生成，需要bootstrap一些相关文件的引入)
```html
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" id = 'modal'>
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
                <h4 class="modal-title" id="myModalLabel">
                    更改座位状态
                </h4>
            </div>
            <div class="modal-body">
                <p id = 'title'></p>
                <form role="form">
                    <div class="form-group">
                        <select class="form-control" id = 'seatState'>
                            <option value = 'active'>座位正常</option>
                            <option value = 'broken'>座位坏掉</option>
                            <option value = 'aisle'>改为过道</option>
                        </select>
                    </div>
                </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                </button>
                <button type="button" class="btn btn-primary" id = 'update' data-dismiss="modal">
                    提交更改
                </button>
            </div>
        </div>
    </div>
</div>
```
> 这个模态框是需要点击一个东西才能会出现。所以我们需要给我们生成的座位绑定。
```javascript
sateImage.setAttribute('data-toggle', 'modal');
sateImage.setAttribute('data-target', '#myModal');
```
> 这样每一次我们点击之后有一个需要我们选择座位状态的弹出框出现了。
#### 获取更改的状态并將一开始的座位表更新：
```javascript
let row,col;
let array = new Array();
for(let i = 0;i<8;i++){
    array[i] = new Array();
    for(let j = 0;j<8;j++){
        array[i][j] = 0;
    }
}
let change = document.getElementById('update');
change.onclick = function changeState() {
	let imageId = "sate"+row+col;
    let newState = document.getElementById(imageId);
    let seatState = document.getElementById('seatState');
    let index = seatState.selectedIndex;
    let value = seatState.options[index].value;
        if(value == 'active'){
		    array[row-1][col-1] = 0;
            newState.src = '../System_manager/image/seat.png';
        }
        else if(value == 'broken'){
	        array[row-1][col-1] = -1;
            newState.src = '../System_manager/image/broken.png';
        }
        else if(value == 'aisle'){
	        array[row-1][col-1] = 2;
            newState.src = '../System_manager/image/aisle.png';
	   }
}
```
>完整代码实现：https://github.com/special-wen/demo/tree/master/demo_seat



