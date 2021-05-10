import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  pageSection: {
    padding: 24,
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    height: '100vh',
    width: '100%',
    minHeight: '100vh',
    minWidth: '100%',
    overflow: 'hidden',
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})

const Section: React.FC = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <section {...props} className={clsx(classes.pageSection)}>
      <div className={classes.inner}>{children}</div>
    </section>
  )
}

export default Section
