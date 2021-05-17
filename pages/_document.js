import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='fr'>
        <Head>
          {/* Begin MailChimp script */}
          <script
            id='mcjs'
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/6498742f22680f7d4455a8459/7dd17b399bef4c908cb7f346e.js")`
            }}
          />
          {/* End MailChimp script*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
