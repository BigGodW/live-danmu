// console.log("插件内容插入");
// const danmu = document.querySelector("#chatroom");
// const app = document.getElementById("root");
// let showDanmu = false;
// let windowWidth = window.innerWidth;
// function updateWindowWidth() {
//   windowWidth = window.innerWidth;
//   console.log("Updated window width:", windowWidth, "px");
//   if (windowWidth < 510 && !showDanmu) {
//     setTimeout(() => {
//       showDanmu = true;
//       danmu.style.padding = "10px";
//       app.insertAdjacentElement("beforebegin", danmu);
//       document.querySelector(".app-container").style.display = "none";
//     }, 1000);
//   }
//   if(windowWidth>510 && showDanmu){
//     setTimeout(()=>{
//         document.getElementById('root').removeChild(danmu)
//         document.querySelector('.app-container').style.display = 'block'
//     },1000)
//   }
// }

// window.addEventListener("resize", updateWindowWidth);

// // 初始调用以获取当前宽度
// updateWindowWidth();

// console.log({ danmu, app, windowWidth });
