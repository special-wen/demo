## javascript提供定时执行代码的功能，叫做定时器(timer)，主要由setTimeout()和setInterval()这两个函数来完成。
### setTimeout()
#### ```setTimeout```函数用来执行某个函数或某个代码，在一定的事件之后执行。
- ```setTime(function,delay)``` 参数含义：第一个为执行语句，第二个参数为推迟的事件，单位毫秒
- 第一个参数是代码段则必须是以字符串的形式放入。若为函数名直接放入即可。第二个参数默认值为0
- 允许有更多的参数。它们被传入推迟执行的函数（回调函数）
### setInterval()
#### 用法与setTimeout完全一致，区别在于setInterval是割一定的事件执行一次，无限执行。
- 常见用途：实现轮询
### clearTimeout(),clearInterval()
#### setTimeout和setInterval函数，都返回一个表示计数器编号的整数值，将该整数传入到clearTimeout和clearInterval函数，就可以取消对应的定时器
- setTimeout和clearTimeout可以实现debounce方法。该方法用于防止某个函数在段时间内被密集调用。
> 具体来说，debounce方法返回一个新版的该函数，这个新版函数调用后，只有在指定时间内没有新的调用，才会执行，否则就重新计时。
### setTimeout(f,0)
#### setTimeout(f,0)的作用，让f在现有的任务（脚本同步执行和消息队列指定的任务）一结束就立刻执行。也就是是说尽可能的早的执行指定的任务。而不是立刻执行这个任务
#### 用途：
- 调整事件发生的顺序：比如，网页开发中，某个事件先发生在子元素，然后冒泡到父元素，即子元素的事件回调函数，会早于父元素的事件回调函数触发。如果，我们先让父元素的事件回调函数先发生，就要用到setTimeout(f, 0)。
