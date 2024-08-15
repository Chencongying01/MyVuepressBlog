import comp from "E:/vuepress/MyVuepressBlog/docs/.vuepress/.temp/pages/note/nginx/index.html.vue"
const data = JSON.parse("{\"path\":\"/note/nginx/\",\"title\":\"nginx 常用配置\",\"lang\":\"zh-CN\",\"frontmatter\":{\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[{\"level\":2,\"title\":\"nginx gzip 配置\",\"slug\":\"nginx-gzip-配置\",\"link\":\"#nginx-gzip-配置\",\"children\":[]},{\"level\":2,\"title\":\"nginx server 配置\",\"slug\":\"nginx-server-配置\",\"link\":\"#nginx-server-配置\",\"children\":[]}],\"readingTime\":{\"minutes\":4.13,\"words\":1239},\"filePathRelative\":\"note/nginx/README.md\",\"categoryList\":[{\"id\":\"aad653\",\"sort\":10000,\"name\":\"note\"},{\"id\":\"30de72\",\"sort\":10002,\"name\":\"nginx\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
