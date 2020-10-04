import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp