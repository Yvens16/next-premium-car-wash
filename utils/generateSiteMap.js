const fs = require('fs')
const globby = require('globby')
const format = require('xml-formatter')

async function generateSiteMap () {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[id].js',
    '!pages/api',
    'posts/*.md'
  ])

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(page => {
            const path = page
              .replace('pages', '')
              .replace('.js', '')
              .replace('.md', '')
            console.log('path:', path)
            const route = path === '/index' ? '' : path
            return `
                    <url>
                        <loc>${`https://premiumcarwash.fr/${route}`}</loc>
                    </url>
                `
          })
          .join('')}
    </urlset>
  `
  sitemap = format(sitemap, {
    indentation: '  ',
    filter: node => node.type !== 'Comment',
    collapseContent: true,
    lineSeparator: '\n'
  })
  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()
