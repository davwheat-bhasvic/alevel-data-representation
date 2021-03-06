import { createMuiTheme } from '@material-ui/core'
import Colors from './data/colors.json'

export default createMuiTheme({
  typography: {
    allVariants: {
      fontFamily:
        "'Glacial Indifference', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
  },
  palette: {
    primary: {
      main: Colors.primaryBlue,
    },
    secondary: {
      main: Colors.primaryRed,
    },
  },
  props: {
    MuiChip: {
      variant: 'outlined',
    },
  },
})
