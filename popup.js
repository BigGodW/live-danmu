const btn = document.getElementById("open-live");
const liveUrls = {
  douyin: "https://live.douyin.com/215450079114",
  kuaishou: "https://live.kuaishou.com/u/3xgg5x5x6f4w6em",
  weixin: "https://channels.weixin.qq.com/platform/live/liveBuild",
  taobao: "https://myseller.taobao.com/home.htm/qn-live-container/live/list",
};

const checkboxes = document.querySelectorAll('input[name="lives"]');

btn.addEventListener("click", () => {
  const openWindows = [];
  Array.from(checkboxes).map((checkbox) => {
    if (checkbox.checked) {
      openWindows.push({ value: checkbox.value, checked: checkbox.checked });
    }
  });

  openWindows.forEach((item, i) => {
    const left = 400 * i;
    chrome.windows.create({ url:liveUrls[item.value], type: "normal", width: 350, left });
  });
});
