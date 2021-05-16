import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
const ThemeProviderComponent = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderComponent
