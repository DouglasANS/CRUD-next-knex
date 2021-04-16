import '../styles/globals.css'
import { EfeitosProvider } from '../contexts/ContextEfeitos'

function MyApp({ Component, pageProps }) {
  return(
    <EfeitosProvider>
      <Component {...pageProps} />
    </EfeitosProvider>
  )}

export default MyApp
