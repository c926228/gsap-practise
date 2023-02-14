# Note 

筆記在練習時遇到的資訊

## Gsap 

#### [labels : ](https://greensock.com/docs/v3/GSAP/Timeline/labels)
新增labels時使用.addLabel( labelName(String), position(Number | String) )   
需要在同一個時間線上。

``` js
var tl = gsap.timeline();

tl.addLabel("myLabel", 3);
tl.addLabel("anotherLabel", 5);
```

當動畫相關的DOM會在onMounted之後動態生成，動畫需搭配`nextTick()`使用，避免找不到elements   

#### [CSSRulePlugin： ](https://greensock.com/docs/v3/Plugins/CSSRulePlugin)   
當需要選取偽元素時，需要使用`CSSRulePlugin.getRule`獲取並宣告，並將改動的值寫在`cssRule: {}`中。
``` css
.myClass {
    color: #FF0000;
}
.myClass::before {
    content: "This content is before.";
    color: #00FF00;
}
```
``` js
var rule = CSSRulePlugin.getRule(".myClass::before"); //get the rule
gsap.to(rule, {duration: 3, cssRule: {color: "blue"}});
```
#### [ScrollToPlugin：](https://greensock.com/docs/v3/Plugins/ScrollToPlugin)
#### [ScrollTrigger：](https://greensock.com/docs/v3/Plugins/ScrollTrigger)

學習參考：
- [gsap 官網](https://greensock.com/get-started/)
- [Vue 官網 - 全局API](https://cn.vuejs.org/api/general.html)
