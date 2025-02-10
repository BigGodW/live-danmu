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
const liveInfo = document.querySelector('#__live_video__ [class^="wrap-"]')
console.log(liveInfo)
// document.querySelector('[class^="chatroom-"').insertBefore(liveInfo)