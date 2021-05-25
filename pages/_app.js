import { GeistProvider, CssBaseline } from '@geist-ui/react'
import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <GeistProvider>
      <Component {...pageProps} />
    </GeistProvider>
  )
}
