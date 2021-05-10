import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Design/Hero'
import Footer from '../components/PageComponents/Footer'
import Colors from '../data/colors.json'

const useStyles = makeStyles({
  root: {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: '100%',
    textAlign: 'center',
  },
})

const Error404Page: React.FC = () => {
  const classes = useStyles()

  return (
    <Layout title="Home" className={classes.root}>
      <Hero color={Colors.primaryBlue}>
        {() => [
          <h1 className="text-megaphone">Page not found</h1>,
          <p role="doc-subtitle" className="text-speak">
            <Link to="/"> Go to home page</Link>
          </p>,
        ]}
      </Hero>

      <Footer />
    </Layout>
  )
}

export default Error404Page
