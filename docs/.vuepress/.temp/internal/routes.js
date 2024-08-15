export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/note/javascript/", { loader: () => import(/* webpackChunkName: "note_javascript_index.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/note/javascript/index.html.js"), meta: {"title":"JavaScript 笔记"} }],
  ["/note/nginx/", { loader: () => import(/* webpackChunkName: "note_nginx_index.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/note/nginx/index.html.js"), meta: {"title":"nginx 常用配置"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
