module.exports = {
  title: "MAO MAO CHU XIA",
  description: "my home page",
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
    nav: [
      { text: "Home", link: "/" },
      { text: "学习笔记", link: "/note/" },
    ],
    siderbar: {
      "/note/": [
        {
          title: "前端笔记",
          collapsable: true, // 可折叠
          children: ["note/javascript/javascript-basic"],
        },
        {
          title: "nginx学习笔记",
          collapsable: true, // 可折叠
          children: ["note/nginx/nginx入门"],
        },
      ],
    },
    sidebarDepth: 2,
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
};
