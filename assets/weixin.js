console.log("获取微信视频号直播弹幕数据");

// 1. 找到 Wujie 容器
const wujieEl = document.querySelector("wujie-app");
const shadowRoot = wujieEl.shadowRoot;

fetch("https://cdn.jsdelivr.net/gh/BigGodW/danmu-code/weixin.css") // 你的本地 CSS 路径
  .then((res) => res.text())
  .then((cssText) => {
    // 3. 注入到 Shadow DOM
    console.log(cssText);
    const style = document.createElement("style");
    style.textContent = cssText;
    shadowRoot.appendChild(style);
    console.log("远程CSS 注入成功！");
  })
  .catch((err) => console.error("加载 CSS 失败", err));

