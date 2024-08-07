module.exports = {
  title: "MAO MAO CHU XIA",
  description: "我的个人博客",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  serviceWorker: true, // 是否开启 PWA
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumers: false, // 代码块显示行号
  },
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "学习笔记",
        items: [
          {
            text: "前端笔记",
            items: [{ text: "JavaScript", link: "/note/javascript/" }],
          },
          {
            text: "Nginx",
            items: [{ text: "nginx入门", link: "/note/nginx/" }],
          },
        ],
      },
    ],
    // siderbar: [
    //   {
    //     title: "前端笔记",
    //     collapsable: true, // 可折叠
    //     path: "/node/",
    //     sidebarDepth: 1,
    //     children: ["/note/javascript/javascript-basic.md"],
    //   },
    //   {
    //     title: "nginx学习笔记",
    //     collapsable: true, // 可折叠
    //     children: [
    //       {
    //         title: "Nginx",
    //         path: "/note/nginx/nginx入门.md",
    //       },
    //     ],
    //   },
    // ],
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
};
