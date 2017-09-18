## 前端一些常用的demo操作

### table.html
- 主要实现表格的动态添加,动态添加表格的一行，当然这个一行是指一行数据
> 通过用insertRow()方法实现插入行;通过insertCell()方法实现单元格元素的插入

### delete_table.html
- 主要通过实现表格的删除操作，删除指定行和删除表格中所有内容
> 通过使用deleteRow(index)方法删除表格行。index为参数，表示第几行，这个参数时从上向下，由0开始数的，
> 另外有特别需要注意的一点：如果参数不写，则效果与参数为0一样，表示删除最上面一行
> 相对应的是，deleteCol(index)方法是删除单元格

### table_select.html
- 主要实现表格的鼠标事件。鼠标的移入移出以及鼠标的点击事件
> 通过方法event.srcElement.tagName方法和event.srcElement.parentElement方法实现。
> event是触发事件的源对象，而srcElement则就是选中对象，而parentElement则是选中对象的父层对象；
> 以当前的例子来简单解释的话，就是说，鼠标放上table，从而激活了事件getrow（this），
当鼠标放在任一单元格之上时，它的srcElement都是td，它的parentElement也就是tr一行了，则找到一行的对象了

### create_table.html
- 主要实现表格的动态生成。