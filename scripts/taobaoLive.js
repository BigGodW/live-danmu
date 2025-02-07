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