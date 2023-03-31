module.exports = {
  // 网站标题
  title: "Mool3D",
  // 网站描述
  description: "Interview with vitePress",
  // 打包目录
  dest: "./dist",
  base: "/docs/",
  // 头部head
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  // 使用插件
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/medium-zoom",
    "@vuepress/nprogress",
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    // lastUpdated: 'Last Updated', // string | boolean
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: [{ text: "掘金", link: "https://juejin.cn/user/3536482414111101" }],
    sidebar: {
      "/": getSidebar(),
    },
  },
};

function getSidebar() {
  return [
    {
      text: "开始上手",
      children: [
        { text: "使用说明", link: "/Begin/" },
        { text: "使用建议", link: "/Begin/propose" },
      ],
      sidebarDepth: 3,
    },
    {
      text: "主类",
      children: [{ text: "Viewer", link: "/Viewer/" }],
      sidebarDepth: 3,
    },
    {
      text: "相机",
      children: [{ text: "Camera", link: "/Camera/" }],
      sidebarDepth: 3,
    },
    {
      text: "渲染",
      children: [{ text: "Render", link: "/Render/" }],
      sidebarDepth: 3,
    },
    {
      text: "雾",
      children: [{ text: "Fog", link: "/Fog/" }],
      sidebarDepth: 3,
    },
    {
      text: "灯光",
      children: [{ text: "Light", link: "/Light/" }],
      sidebarDepth: 3,
    },
    {
      text: "模型",
      children: [{ text: "Model", link: "/Model/" }],
      sidebarDepth: 3,
    },
    {
      text: "控制",
      children: [{ text: "Control", link: "/Control/" }],
      sidebarDepth: 3,
    },
    {
      text: "事件",
      children: [{ text: "Event", link: "/Event/" }],
      sidebarDepth: 3,
    },
    {
      text: "天空",
      children: [{ text: "Sky", link: "/Sky/" }],
      sidebarDepth: 3,
    },
    {
      text: "环境",
      children: [{ text: "Environment", link: "/Environment/" }],
      sidebarDepth: 3,
    },
    {
      text: "动画",
      children: [{ text: "Animate", link: "/Animate/" }],
      sidebarDepth: 3,
    },
    {
      text: "资源",
      children: [{ text: "Source", link: "/Source/" }],
      sidebarDepth: 3,
    },
    {
      text: "水",
      children: [{ text: "Water", link: "/Water/" }],
      sidebarDepth: 3,
    },
    {
      text: "粒子",
      children: [{ text: "Sprite", link: "/Sprite/" }],
      sidebarDepth: 3,
    },
    {
      text: "巡游",
      children: [{ text: "Parade", link: "/Parade/" }],
      sidebarDepth: 3,
    },
    {
      text: "粒子系统",
      children: [{ text: "Particle", link: "/Particle/" }],
      sidebarDepth: 3,
    },
    {
      text: "漫游",
      children: [{ text: "Roamk", link: "/Roamk/" }],
      sidebarDepth: 3,
    },
    {
      text: "仿真漫游",
      children: [{ text: "Roam", link: "/Roam/" }],
      sidebarDepth: 3,
    },
  ];
}
