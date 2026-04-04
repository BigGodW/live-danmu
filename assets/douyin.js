// 抖音直播弹幕
console.log('获取抖音直播弹幕数据');

// 停止视频
function stopVideo() {
  try {
    document.querySelectorAll("video").forEach(v => {
      v.pause(); v.src = ""; v.srcObject = null; v.load();
    });
  } catch (e) {}
}
autoClickNewMessage();

// 自动点击新消息
function autoClickNewMessage() {
  try {
    const el = document.querySelector(".webcast-chatroom___unread-tips.webcast-chatroom___unread");
    if (el) el.click();
    const stopel = Array.from(document.querySelectorAll('div'))
    .find(el => el.textContent.trim() === '继续播放');
      stopel && stopel.click();
  } catch (e) {}

  setTimeout(autoClickNewMessage, 5000);
}

stopVideo();

setInterval(stopVideo, 5000);
