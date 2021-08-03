import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/a_global.sty"
import { defaultTheme as theme } from "../styles/a_themes.sty"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
