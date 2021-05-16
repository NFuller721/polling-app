import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

// ThemeProviderComponent
const ThemeProviderComponent = ({ children }) => {

  // Does Prefer Dark Mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // Set theme
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
    },
  })

  // Return theme with children
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderComponent
