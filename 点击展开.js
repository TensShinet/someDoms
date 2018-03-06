var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}

var toggleClass = function(element, className) {
    var e = element
    if(e.classList.contains(className)) {
        e.classList.remove(className)
    } else {
        e.classList.add(className)
    }
}
// 给按钮, 绑定事件
// var bindEventToggle = function() {
//     var b = e('.main-menu-toggle')
//     b.addEventListener('click', function(event){
//         var target = event.target
//         // 要不要事件委托呢,
//         var c = e('.main-content')
//         // log('bindEventToggle() parent', c)
//         //
//         toggleClass(c, 'contentHide')
//     })
// }
// bindEventToggle()

// 现在, 有多个
// 首先要给所有按钮绑定事件

var bindEvent = function(element, eventName, callback) {
    var e = element
    e.addEventListener(eventName, function(){
        var t = event.target
        var p = t.parentElement
        callback(p)
    })
}
var bindAll = function(elements, eventName, callback) {
    for (var i = 0; i < elements.length; i++) {
        //
        var e = elements[i]
        bindEvent(e, eventName, callback)
    }
}

var bindEventToggles = function() {
    var buttons = document.querySelectorAll('.main-menu-toggle')
    // 要给所有buttons绑定事件
    bindAll(buttons, 'click', function(p){
        // 要把content隐藏
        // 首先, 要找到content
        // 需要父元素
        var c = p.querySelector('.main-content')
        toggleClass(c, 'contentHide')
    })
}
bindEventToggles()
