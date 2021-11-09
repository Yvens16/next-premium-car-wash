import { ProvideAuth } from '../firebase/use-auth.js'
import Navbar from '../components/navigation/navbar'
import Footer from '../components/footer/footer'
import 'tailwindcss/tailwind.css'
import '@fontsource/roboto';



const Layout = ({ children }) => <div>{children}</div>

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
