module.exports = {
  title: "Congying.Chen blog",
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
      { text: "Guide", link: "/guide/" },
      { text: "External", link: "https://baidu.com" },
    ],
    siderbar: {
      "/": [
        //   "/", //指的是根目录的md文件 也就是 README.md 里面的内容
        //         "apiword",  根目录创建 apiword.md文件
        //         "api",根目录创建 api.md文件
        //         "error" 根目录创建 error.md文件
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
