console.log("✅ 快手弹幕&互动脚本已注入");
// 自动点击新消息
function autoClickNewMessage() {
  try {
    const el = document.querySelector("div.new-message");
    if (el) el.click();
  } catch (e) {}
  setTimeout(autoClickNewMessage, 5000);
}
autoClickNewMessage();


// 停止视频加载
function stopAllVideoTraffic() {
  try {
    document.querySelectorAll("video").forEach((v) => {
      if (!v.paused) v.pause();
      v.src = "";
      v.srcObject = null;
      v.load();
    });
    document.querySelectorAll("audio, iframe[src*=video], iframe[src*=live]").forEach(el => {
      el.src = "";
    });
  } catch (e) {}
}
stopAllVideoTraffic();


setInterval(stopVideo, 5000);



