
function stopVideo(){
    const video = document.getElementsByTagName('video')[0]
    if(video){
        video.pause()
    }
}
setTimeout(()=>{
    stopVideo()
},1000)
window.addEventListener('resize',stopVideo)
// 判断屏幕尺寸
let windowWidth = window.innerWidth
console.log(windowWidth)
