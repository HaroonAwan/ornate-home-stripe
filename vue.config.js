
const SitemapPlugin = require('sitemap-webpack-plugin').default
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
    path: '/',
    lastmod: '2022-08-02',
    priority: 1.0,
    changefreq: 'yearly'
  }
]

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin({ base: 'https://ornatehome.org/', paths })
    ]
  },

  transpileDependencies: [
    'vuetify'
  ]
}