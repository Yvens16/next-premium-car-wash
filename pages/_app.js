import '../styles/globals.scss'
import { ProvideAuth } from '../firebase/use-auth.js'
import Navbar from '../components/navigation/navbar'
import Footer from '../components/footer/footer'
import '@fontsource/roboto';

const Layout = ({ children }) => <div className='layout'>{children}</div>

function MyApp ({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ProvideAuth>
  )
}

export default MyApp
