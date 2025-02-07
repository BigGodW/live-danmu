console.log('插入代码')

let button = document.createElement('button')
button.textContent = '去直播间'
button.style.backgroundColor = 'red'
button.style.color = 'white'
button.style.fontSize = '20px'
button.style.padding = '10px'
button.style.borderRadius = '10px'
button.style.border = 'none'

// 获取直播间ID

setTimeout(()=>{
    let roomBox = document.getElementsByClassName('tblalm-list-item')[0]
if(roomBox){
    const roomid = roomBox.getElementsByClassName('tui-number-figure tui-number-figure-default ')[2].textContent
    if(roomid){
        button.addEventListener('click',()=>{
            console.log('按钮点击了')
            window.location.href = 'https://myseller.taobao.com/home.htm/qn-live-container/live/control?liveId='+roomid
        })
        const boxx = document.getElementsByClassName('tblalm-space css-1cwagt4 tblalm-space-horizontal tblalm-space-align-center tblalm-space-gap-row-small tblalm-space-gap-col-small tblalm-lm-header')[0]
        boxx.firstChild.appendChild(button)
    }
}

},2000)

