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
          <meta
            name='facebook-domain-verification'
            content='iuotmvzu7n2atpa43bee2741w5humk'
          />
          {/* Begin facebook pixel */}
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1793802514115038');fbq('track', 'PageView')`
            }}
          />
          {/* End facebook pixel */}
          {/* Start Smartlook code */}
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `window.smartlook||(function(d) {
                          var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                          c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
                          })(document);
                          smartlook('init', 'f425471e25fcbb2c42bc3257c028f61f94e710e0')`
            }}
          />
          {/* End Smartlook code */}
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=1793802514115038&ev=PageView&noscript=1"/>`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
