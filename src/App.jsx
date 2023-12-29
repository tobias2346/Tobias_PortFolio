import { Background } from './Background'
import ThemeProvider from './contexts/providers/Theme_provider'

export const App = () => {
  return (
    <>
      <ThemeProvider>
        <Background/>
      </ThemeProvider>
    </>
  )
}
