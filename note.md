# Note 

筆記在練習時遇到的資訊

## Gsap 

一個timeline完整動畫做完就結束不會有暫停,回放,重播......等操作，不需將gsap.timeline()另外宣告出來。
當只有一組set時不需使用到timeline()，直接寫gsap.set即可。
除非有好幾組一起做，才用timeline()包再一起。
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


## JS
Array(num): 建立個長度為`num`的arr，但是內容為empty
[Array.fill()](https://ithelp.ithome.com.tw/articles/10301799): 陣列中塞入內容,若不寫則為塞入`undefined`
[Array.flatMap()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)]:
是 `flat()` 和 `map()` 兩種方法的混合體，運作的過程比較像是 `map()` 執行每一個元素，然後再使用 `flat()` 展開，回傳的是一個新陣列，因此不影響到原陣列。（只能展開一個陣列）
Array.flatMap((currentValue, index, array) => {  })
- currentValue: 当前正在数组中处理的元素
- index: 可选的。数组中正在处理的当前元素的索引。
- array: 可选的。被调用的 map 数组

使用:
Array(num).fill().flatMap() 將同樣陣列重複num次
需要.fill()因為若陣列為空flatMap()會失敗

## CSS

[clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path) : CSS屬性使用裁剪方式創建元元素的可顯示區域。區域內部的部分顯示，區域外部的隱藏。