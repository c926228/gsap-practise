# Note 

筆記在練習時遇到的資訊

## Gsap 

`labels` : 
新增labels時使用.addLabel( labelName(String), position(Number | String) )   
需要在同一個時間線上。

``` js
var tl = gsap.timeline();

tl.addLabel("myLabel", 3);
tl.addLabel("anotherLabel", 5);
```

當動畫相關的DOM會在onMounted之後動態生成，動畫需搭配`nextTick()`使用，避免找不到elements   


學習參考：
- [gsap 官網](https://greensock.com/get-started/)
- [Vue 官網 - 全局API](https://cn.vuejs.org/api/general.html)
