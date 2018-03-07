// 给图片绑定事件
var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}
var bindEvent = function(element, eventName, callback) {
    // 可以这么写吗?
    element.addEventListener(eventName, callback)
}

var bindAll = function(elements, eventName, callback) {
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}


var bindEventImgs = function() {
    // 给所有图片绑定事件
    // 鼠标放上去, 就转变这个图片的样式.
    // 鼠标移开, 就又给图片恢复原来的样式

    // 我先找出应该有的事件名
    // 绑定两个事件, mouseout

    var imgAll = e('.image-all')
    var imgs = imgAll.querySelectorAll('img')
    // log('bindEventImgs():', imgs)
    bindAll(imgs, 'mouseenter', function(event){
        var img = event.target
        img.classList.remove('imageIn')
        img.classList.add('imgHilight')
    })
    bindAll(imgs, 'mouseout', function(img){
        var img = event.target
        img.classList.remove('imgHilight')
        img.classList.add('imageIn')
    })

}
bindEventImgs()

// 功能是实现了,  但是, 有些通用函数没有实现可移植性。
// 在这里我先自己优化一遍
// 然后再看萧井陌的代码


//是这样的,
// 底层的函数, 做通用的事情
// 就能, 实现复制, 粘贴.
