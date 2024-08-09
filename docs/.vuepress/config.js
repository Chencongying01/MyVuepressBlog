import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "MAO MAO CHU XIA",
  description: "我的个人博客",

  // head: [
  //   // 注入到当前页面的 HTML <head> 中的标签
  //   ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  // ],
  // serviceWorker: true, // 是否开启 PWA
  // markdown: {
  //   lineNumers: false, // 代码块显示行号
  // },
  theme: defaultTheme({
    logo: "/images/logo.png",
    repo: "", // 项目地址
    lastUpdated: "上次更新", // 开启页面最后更新时间
    sidebarDepth: 2, // 侧边栏显示深度
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "学习笔记",
        prefix: "/note/",
        children: [
          {
            text: "前端笔记",
            prefix: 'javascript/',
            children: ['README.md']
          },
          {
            text: "Nginx",
            prefix: 'nginx/',
            children: ['README.md']
          },
        ],
      },
    ],
    sidebar: 'heading',
    // sidebar: {
    //   "/note/javascript/": [
    //     {
    //       title: "前端笔记",
    //       collapsable: false, // 可折叠
    //       children: [
    //         {
    //           title: "JavaScript",
    //           link: "/note/javascript/javascript-basic.md",
    //         },
    //       ],
    //     },
    //     {
    //       title: "nginx学习笔记",
    //       collapsable: false, // 可折叠
    //       children: [
    //         {
    //           title: "Nginx",
    //           link: "/note/nginx/nginx入门.md",
    //         },
    //       ],
    //     },
    //   ],
    // },
  }),
});
