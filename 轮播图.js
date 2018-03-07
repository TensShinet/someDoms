// 先将三张图片显示出来
// 隐藏两张
// 通过js控制出现的图片

// 通过按钮控制下一张
var log = function() {
    console.log.apply(console, arguments)
}
var e = function(selector) {
    return document.querySelector(selector)
}

var bindEventSlide = function() {
    var b = e('.main-slide-right-button')
    // 给button 绑定事件
    // log('bindEventSlide()  selector:', selector, 'button:', b)
    b.addEventListener('click', function(event){
        // log('b.addEventListen 点击成功')
        var slide = event.target.parentElement
        // 得到图片总数和当前图片下标
        var numberOfImgs = parseInt(slide.dataset.num)
        var activeIndex = parseInt(slide.dataset.active)
        // 得到下张图片
        var nextIndex = (activeIndex+1) % numberOfImgs
        // 移除, 当前图片的样式
        // 得到当前图片
        log("button事件:", activeIndex, nextIndex)
        var imgId = 'id-mainimage-' + String(activeIndex)
        log("button事件2:", imgId)
        var img = e('#' + imgId)
        log("button事件3:", img)
        img.classList.remove("image-active")
        // 添加, 下一个图片的样式
        imgId = 'id-mainimage-' + String(nextIndex)
        img = e('#' + imgId)
        img.classList.add("image-active")
        // 改变 data-active
        slide.dataset.active = nextIndex
    })
}
bindEventSlide()
