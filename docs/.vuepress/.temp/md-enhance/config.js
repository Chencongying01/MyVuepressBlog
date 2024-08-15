import { defineClientConfig } from "vuepress/client";
import CodeTabs from "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "E:/vuepress/MyVuepressBlog/node_modules/katex/dist/katex.min.css";
import "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/vuepress/MyVuepressBlog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
