---
hide: false # true 真隐藏 index 主页隐藏 false 不隐藏
title: Openlistalist的css美化自用
date: 2025-10-25
updated: 2025-10-25
categories: 搞机日志
cover: https://github.cdn.zero251.xyz/Zero-wyc/Image/main/All/20250804193109903.jpg
aside: false	# 关闭目录边栏
codeHeightLimit: 300 # 代码块限高
tags:
  - 搞机日志
  - WEB
---

> openlist的容器版本的权限赋予太过复杂，以及docker镜像的跟踪源丢失，导致我不得不重新配置openlist，这期间导致了openlist停摆一个月，不断的在docker中重装配置，但仍然在新版本有权限问题无法完全挂载目录的问题~~是我太菜了~~，所以我不得不直接在实体环境中运行，鉴于之前的css美化已经随着一遍遍重装消失不见，我放一个我自用的copy的没有任何技术含量仅仅自我修改参数的版本

<!-- more -->

---

1. 自定义头部

   1. ```html
      <!-- 引入 polyfill -->
      <script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
      
      <!-- 引入字体 -->
      <link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-webfont@1.1.0/lxgwwenkai-regular.css" />
      
      <style>
          /* 隐藏底部 */
          .footer {
              display: none !important;
          }
      
          /* 背景设置 */
          .hope-ui-dark, .hope-ui-light {
              background-image: url('https://easyimages.zero251.xyz/i/2025/10/25/115367250_p0.webp') !important;
              background-size: cover;
              background-attachment: fixed;
              background-position: center;
          }
          
          /*主列表白天模式透明*/
          .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background-color: rgba(255, 255, 255, 0.3) !important;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
          /*主列表夜间模式透明*/
          .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background-color: rgba(0, 0, 0, 0.3) !important;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
          /*readme白天模式透明*/
          .hope-c-PJLV.hope-c-PJLV-ikSuVsl-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background-color: rgba(255, 255, 255, 0.3) !important;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
          /*readme夜间模式透明*/
          .hope-c-PJLV.hope-c-PJLV-iiuDLME-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background-color: rgba(0, 0, 0, 0.3) !important;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
      
          /*顶部*/
          #root > .header {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background: rgba(255, 255, 255, 0); /* 透明背景色 */
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
      
          /*导航条*/
          /*白天模式*/
          .hope-ui-light .body > .nav {
              background-color: rgba(255, 255, 255, 0.3);
              border-radius: var(--hope-radii-xl);
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
          /*夜间模式*/
          .hope-ui-dark .body > .nav {
              background-color: rgba(0, 0, 0, 0.3);
              border-radius: var(--hope-radii-xl);
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
         
          /*隐藏导航条遮罩*/
          .body > .nav::after {
              display: none;
          }
      
          /*右上视图切换菜单*/
          /*白天模式*/
          .hope-ui-light .hope-c-PJLV-iSMXDf-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background: rgba(255, 255, 255, 0.3); /* 透明背景色 */
              border-radius: 10px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
          /*夜间模式*/
          .hope-ui-dark .hope-c-PJLV-iSMXDf-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background: rgba(0, 0, 0, 0.3); /* 透明背景色 */
              border-radius: var(--hope-radii-xl);
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影效果 */
          }
      
          /*右下角侧边栏按钮透明 第一个是白天 第二个是夜间*/
          .hope-ui-light .hope-c-PJLV-ijgzmFG-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background-color: rgba(255, 255, 255, 0.3) !important;
          }
          .hope-ui-dark .hope-c-PJLV-ijgzmFG-css {
              backdrop-filter: blur(10px); /* 毛玻璃效果的强度 */
              -webkit-backdrop-filter: blur(10px); /* 为 Safari 浏览器添加兼容性 */
              background-color: rgba(0, 0, 0, 0.5) !important;
          }
          /*白天模式代码块透明*/
          .hope-ui-light pre {
              background-color: rgba(255, 255, 255, 0.1) !important;
          }
          /*夜间模式代码块透明*/
          .hope-ui-dark pre {
              background-color: rgba(255, 255, 255, 0) !important;
          }
      
          /*底部CSS，.App .table这三个一起的*/
          dibu {
              border-top: 0px;
              position: absolute;
              bottom: 0;
              width: 100%;
              margin: 0px;
              padding: 0px;
          }
          .App {
              min-height: 85vh;
          }
          .table {
              margin: auto;
          }
      
        
          /*全局字体*/
          * {
              font-family: LXGW WenKai;
          }
          * {
              font-weight: bold;
          }
          body {
              font-family: LXGW WenKai;
          }
      </style>
      
      ```

      

2. 自定义内容

   1. ```html
      <!-- 延迟加载 -->
      <div id="customize" style="display: none;">
          <div>
              <br />
              <center class="dibu">
                  <div style=" line-height: 20px;font-size: 9pt;font-weight: bold;">
                      <span>
                          "
                          <span style="color: rgb(154, 216, 166); font-weight: bold;" id="hitokoto">
                              <a href="#" id="hitokoto_text">
                                  "人间忽晚，山河已秋！"
                              </a>
                          </span> "
                      </span>
                  </div>
      
                  <!-- 底部链接 -->
                  <div style="font-size: 13px; font-weight: bold;">
                      <span class="nav-item">
                          <a class="nav-link" href="http://Zero251.xyz" target="_blank">
                              <i class="fas fa-edit" style="color:#409EFF" aria-hidden="true">
                              </i>
                              博客 |
                          </a>
                      </span>
                      <!--后台入口-->                                                     
                      <span class="nav-item">
                          <a class="nav-link" href="/@manage" target="_blank">
                              <i class="fa-solid fa-folder-gear" style="color:#409EFF;" aria-hidden="true">
                              </i>
                              管理 |
                          </a>
                      </span>
      				<!--添加备案信息-->
                      <span class="nav-item">
                          <a class="nav-link" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
                              <i class="fa-solid fa-shield-check" style="color:#409EFF;" aria-hidden="true">
                              </i>
                              闽ICP备2025091782号-1
                          </a>
                      </span>
                  </div>
              </center>
              <br />
          </div>
      
          <!--一言API-->
          <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
      <!--延迟加载范围到这里结束-->
      </div>
      
      <!-- 延迟加载JS -->
      <script>
          let interval = setInterval(() => {
              if (document.querySelector(".footer")) {
                  document.querySelector("#customize").style.display = "";
                  clearInterval(interval);
              }
          }, 200);
      </script>
      
      ```

      


---

引用链接：