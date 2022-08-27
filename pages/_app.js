import '../styles/globals.css'
import Layout from '../components/Layout'
 import LogContextProvider from './api/Context'
export default function MyApp({ Component, pageProps }) {
  return (
<LogContextProvider>
   <Layout>
   <Component  {...pageProps} />
  </Layout>
  </LogContextProvider>
  )
}
//export default MyApp
