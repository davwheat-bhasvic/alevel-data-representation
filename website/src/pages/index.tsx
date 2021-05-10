import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { makeStyles } from '@material-ui/core'

import Layout from '../components/Layout'
import Hero from '../components/Design/Hero'
import Footer from '../components/PageComponents/Footer'
import Colors from '../data/colors.json'
import BillionaireCountriesChart from '../components/BillionaireCountriesChart'
import Breakpoints from '../data/breakpoints'
import { ByCountry } from '../data/BillionaireData'
import convertToOrdinal from '../functions/convertToOrdinal'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    overflowX: 'hidden',
    width: '100%',
    textAlign: 'center',
  },
  graphContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    gap: 16,

    '& > figure': {
      flexBasis: '30%',
    },
    '& > div': {
      flexBasis: '70%',
    },

    '@media (min-width: 900px) and (max-width: 1200px)': {
      '& > figure': {
        flexBasis: '40%',
      },
      '& > div': {
        flexBasis: '60%',
      },
    },

    '@media (max-width: 899px)': {
      flexDirection: 'column',
      '& > figure': {
        height: '40%',
      },
      '& > div': {
        height: '60%',
      },
    },
  },
  billTableHeading: {
    '@media (min-width: 768px) and (max-width: 1300px)': {
      fontSize: 56,
      lineHeight: '56px',
    },
  },
  billTable: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
    columnGap: 16,
    rowGap: 8,
    marginBottom: 32,
    '@media (max-width: 1300px)': {
      fontSize: 32,
    },
  },
})

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeOut',
      duration: 0.75,
    },
  },
  hiddenOffset: {
    opacity: 0,
    y: 64,
    scale: 0.5,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeOut',
      duration: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: 'easeOut',
      duration: 1,
    },
  },
}

const billionaireTotal = ByCountry.reduce((acc, curr) => acc + curr.value, 0)

const IndexPage: React.FC = () => {
  const classes = useStyles()
  const [countUpTotalWordsShown, setCountUpTotalWordsShown] = useState(false)

  return (
    <Layout title="Home" className={classes.root}>
      <Hero color={Colors.primaryBlue}>
        {() => [
          <motion.h1 variants={variants} className="text-megaphone">
            Billionaire Round-up
          </motion.h1>,
          <motion.p variants={variants} role="doc-subtitle" className="text-speak">
            Using data about the {billionaireTotal} most wealthy people, from Forbes
          </motion.p>,
          <motion.div className="smallDeviceWarning">
            <strong>This page is best viewed on larger devices.</strong>
          </motion.div>,
        ]}
      </Hero>

      <Hero color={Colors.primaryRed}>
        {inView => (
          <>
            <motion.p variants={variants} className="text-shout">
              The net worth of the top 100 richest people totals
            </motion.p>
            <p className="text-loud">
              <CountUp
                start={0}
                end={inView ? 4_164_800_000_000 : 0}
                duration={5}
                separator=" "
                decimals={0}
                prefix="$"
                onEnd={() => setCountUpTotalWordsShown(true)}
                onStart={() => setCountUpTotalWordsShown(false)}
              />
            </p>
            <motion.p
              variants={variants}
              initial="hiddenOffset"
              animate={countUpTotalWordsShown ? 'visible' : 'hiddenOffset'}
              className="text-louder"
            >
              That's $4.2 trillion!
            </motion.p>
          </>
        )}
      </Hero>

      <Hero color={Colors.blueDark}>
        {() => (
          <>
            <h2 className="text-shout">That's enough to...</h2>

            <motion.div variants={variants}>
              <p className="text-loud">give everyone in the UK £62000</p>
            </motion.div>

            <motion.div variants={variants}>
              <p className="text-loud">pay off all UK student loan debt 7 times</p>
            </motion.div>

            <motion.div variants={variants}>
              <p className="text-loud">stretch to the moon 250 times in £1 coins</p>
            </motion.div>
          </>
        )}
      </Hero>

      <Hero color={Colors.neutralGrey}>
        {inView => (
          <>
            <motion.h2 className="text-louder">The top 5 billionaires account for</motion.h2>
            <motion.div>
              <CountUp
                className="text-megaphone"
                start={0}
                end={inView ? 700_000_000_000 : 0}
                duration={3}
                separator=" "
                decimals={0}
                prefix="$"
                onEnd={() => setCountUpTotalWordsShown(true)}
                onStart={() => setCountUpTotalWordsShown(false)}
              />
            </motion.div>
          </>
        )}
      </Hero>

      <Hero color={Colors.primaryBlue}>
        {() => {
          const UKCount = ByCountry.find(v => v.label === 'United Kingdom').value
          const UKPos = ByCountry.findIndex(v => v.label === 'United Kingdom') + 1

          const getPct = (count: number): string => `${((count / billionaireTotal) * 100).toFixed(0)}%`

          return (
            <div className={classes.graphContainer}>
              <figure aria-label="Pie chart showing the proportion of billionaires from different countries.">
                <BillionaireCountriesChart />
              </figure>
              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 className={clsx('text-megaphone', classes.billTableHeading)}>
                  Of {billionaireTotal} billionaires, the top three ranking countries are...
                </h2>
                <div className={clsx('text-loud', classes.billTable)}>
                  <span>{ByCountry[0].label}</span>
                  <span>{ByCountry[0].value} billionaires</span>
                  <span>{ByCountry[1].label}</span>
                  <span>{ByCountry[1].value} billionaires</span>
                  <span>{ByCountry[2].label}</span>
                  <span>{ByCountry[2].value} billionaires</span>
                </div>
                <p className="text-speak">
                  The UK places number {convertToOrdinal(UKPos)} in the rankings, with {UKCount} billionaires.
                </p>
              </div>
            </div>
          )
        }}
      </Hero>

      <Footer />
    </Layout>
  )
}

export default IndexPage
