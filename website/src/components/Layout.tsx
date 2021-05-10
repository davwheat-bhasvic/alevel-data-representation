import React from 'react'

import SEO from './SEO'

import { makeStyles, ThemeProvider } from '@material-ui/styles'
import theme from '../theme'
import clsx from 'clsx'

const useStyles = makeStyles({
  mainContent: {
    flex: '1',
    width: '100%',
  },
})

interface Props {
  title: string
  className: string
}

const Layout: React.FC<Props> = ({ children, title, className }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <SEO title={title} />
      {/* <Header /> */}
      <main className={clsx(classes.mainContent, className)}>{children}</main>
      {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default Layout
