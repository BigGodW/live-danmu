// 网站配置
const CONFIG = [
  { 
    name:"快手",
    host: "live.kuaishou.com",
    localCssUrl: "assets/css/kuaishou.css",
    newCssUrl: "https://cdn.jsdelivr.net/gh/BigGodW/live-danmu@master/assets/css/kuaishou.css",
    localJsUrl: "assets/kuaishou.js"
  },
  {
    name: "抖音",
    host: "live.douyin.com",
    localCssUrl: "assets/css/douyin.css",
    newCssUrl: 'https://cdn.jsdelivr.net/gh/BigGodW/live-danmu@master/assets/css/douyin.css',
    localJsUrl: "assets/douyin.js"
  },
  {
    name: "微信视频号",
    host: "channels.weixin.qq.com",
    localCssUrl: 'assets/css/weixin.css', // 
    newCssUrl: 'https://cdn.jsdelivr.net/gh/BigGodW/live-danmu@master/assets/css/weixin.css',
    localJsUrl: "assets/weixin.js"
  }
];

// 右键菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({ id: "inject", title: "查看弹幕", contexts: ["all"] });
});

// 点击注入
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: injectAuto,
      args: [CONFIG]
    });
  }
});

// 核心注入函数
async function injectAuto(CONFIG) {
  // 匹配当前网站
  const site = CONFIG.find(item => location.host.includes(item.host));
  if (!site) return alert("❌ 暂不支持该网站");

  // 处理 URL
  const getUrl = (u) => {
    if (!u) return null;
    return u.startsWith("http") ? u : chrome.runtime.getURL(u);
  };

  // 加载 CSS 并返回成功状态
  const loadCss = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("加载失败");
      const style = document.createElement('style');
      style.textContent = await res.text();
      document.head.appendChild(style);
      return true;
    } catch (e) {
      console.warn("CSS 加载失败:", url);
      return false;
    }
  };

  // 加载 JS
  const loadJs = (url) => {
    if (!url) return;
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  };

  // ======================================
  // 核心逻辑：远程成功 → 不加载本地
  // ======================================
  const remoteOk = await loadCss(getUrl(site.newCssUrl));
  
  // 只有远程失败才加载本地CSS
  if (!remoteOk) {
    await loadCss(getUrl(site.localCssUrl));
  }

  // 加载本地JS
  loadJs(getUrl(site.localJsUrl));

  // 提示结果
  alert(remoteOk
    ? "✅ 弹幕注入成功（远程CDN样式）"
    : "✅ 弹幕注入成功（本地样式）"
  );
}