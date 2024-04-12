module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/docs-logo.png' }]
  ],
  themeConfig: {
    logo: '/docs-logo.png',
    nav: [
      { text: 'HTML/CSS', link: '/html-css/' },
      { text: 'JavaScript', link: '/javascript/' },
      { text: '前端工程化', link: '/engineering/' },
      { text: '浏览器及网络', link: '/browser/' },
      { text: 'Git入门', link: '/git/' }, 
      { text: 'GitHub', link: 'https://github.com/666de6/frontend-note/' }, 
    ],
    sidebar: [
      {
        title: 'HTML/CSS',
        path: '/html-css/',
        children: [
          {
            title: 'HTML',
            path: '/html-css/html'
          },
          {
            title: 'CSS',
            path: '/html-css/css'
          },
        ]
      },
      {
        title: 'JavaScript',
        path: '/javascript/',
        children: [
          {
            title: 'JavaScript',
            path: '/javascript/javascript'
          },
          {
            title: 'ES6',
            path: '/javascript/es6'
          },
          {
            title: 'jQuery',
            path: '/javascript/jquery'
          },
        ]
      },
      {
        title: '前端工程化（基于VUE）',
        path: '/engineering/',
        children: [
          {
            title: 'Vue',
            path: '/engineering/vue'
          },
          {
            title: 'Node',
            path: '/engineering/node'
          },
          {
            title: 'UI',
            path: '/engineering/ui'
          },
          {
            title: 'Webpack',
            path: '/engineering/webpack'
          },
          {
            title: 'Http',
            path: '/engineering/http'
          },
        ]
      },
      {
        title: '浏览器及网络',
        path: '/browser/',
        children: [
          {
            title: '浏览器',
            path: '/browser/browser'
          },
          {
            title: '网络',
            path: '/browser/internet'
          },
        ]
      },
    ]
    
  }
}