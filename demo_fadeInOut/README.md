#淡入淡出效果
## js原生实现
### js封装fadeIn(),fadeOut()函数的实现
- fadeIn()
> 将需要淡入的元素在css样式中添加```display:none```。之后进行js操作：通过```ele.style.display = 'block'```设置显示元素，并将该元素的透明度改为0;之后进行封装函数。
```html
    (function () {
            ele.style.opacity = opa;
            opa = opa +10;
            if(opa <= opacity){
                setTimeout(arguments.callee,speed);
            }
        })();
```
> 通过```arguments.callee```实现递归。使得透明度以10为基数增加。

- fadeOut()

> 在js中将需要淡出的元素的style的display更改属性为none.设置隐藏。并不断的将透明度改为0.原理和淡入一样。

源码地址：https://github.com/special-wen/demo/tree/master/demo_fadeInOut/js%E5%8E%9F%E7%94%9F

## css实现
### 实现鼠标移入时淡入鼠标移除时淡出
- transition

#### 利用css3新增的属性transition实现。

```css
#demo li{
    list-style: none;
    font-size: 18px;
    color: #8fa1c7;
    transition: opacity 2s;
    opacity: 0;
}

#demo li:hover{
    opacity: 1;
    transition-duration: 0s;
}
```
> ```transition:opacity 2s```表示为改变属性opacity:0一共2s。当鼠标移入时，将透明度更改为1

源码地址：https://github.com/special-wen/demo/tree/master/demo_fadeInOut/css%E5%AE%9E%E7%8E%B0
