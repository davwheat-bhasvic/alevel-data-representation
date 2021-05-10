import React from 'react'

import clsx from 'clsx'
import bestContrast from 'get-best-contrast-color'
import { makeStyles } from '@material-ui/core'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const useStyles = makeStyles({
  hero: {
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    height: '100vh',
    width: '100%',
    minHeight: '100vh',
    minWidth: '100%',
    position: 'relative',
    background: '#000',
    color: '#fff',
    overflow: 'hidden',
    padding: 24,
  },
  heroInner: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
})

interface Props {
  color?: string
  className?: string
  innerClassName?: string
  children?: (inView: boolean) => React.ReactNode
}

const transitionOptions = {
  staggerChildren: 2,
  ease: 'easeOut',
  duration: 1,
}

const variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionOptions,
  },
  hiddenOffset: {
    opacity: 0,
    y: 64,
    scale: 0.5,
    transition: transitionOptions,
  },
  hidden: {
    opacity: 0,
    y: 0,
    transition: transitionOptions,
  },
}

const Hero: React.FC<Props> = ({ children, color = '#000', className, innerClassName }) => {
  const classes = useStyles()
  const [ref, inView, entry] = useInView({
    threshold: 0.75,
  })

  return (
    <section
      ref={ref}
      className={clsx(classes.hero, className)}
      style={{ backgroundColor: color, color: bestContrast(color, ['#000', '#fff']) }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        className={clsx(classes.heroInner, innerClassName)}
      >
        {children(inView)}
      </motion.div>
    </section>
  )
}

export default Hero
