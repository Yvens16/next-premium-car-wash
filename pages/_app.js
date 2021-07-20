import { ProvideAuth } from '../firebase/use-auth.js'
import Navbar from '../components/navigation/navbar'
import Footer from '../components/footer/footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto';
import '../styles/globals.scss'



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
