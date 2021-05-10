import React from 'react'

import { makeStyles } from '@material-ui/core'
import Link from '../Links/Link'
import { graphql, useStaticQuery } from 'gatsby'
import Section from '../Design/Section'

const useStyles = makeStyles({})

const Footer: React.FC = () => {
  const classes = useStyles()
  const {
    siteBuildMetadata,
  }: {
    siteBuildMetadata: {
      /**
       * String date/time formatted as YYYY-MM-DD HH:mm
       */
      buildTime: string
    }
  } = useStaticQuery(
    graphql`
      query {
        siteBuildMetadata {
          buildTime(formatString: "YYYY-MM-DD HH:mm z")
        }
      }
    `,
  )

  return (
    <Section>
      <p className="text-speak-up">&copy; {new Date().getFullYear()} David Wheatley</p>
      <p className="text-whisper">Last updated {siteBuildMetadata.buildTime}.</p>
    </Section>
  )
}

export default Footer
