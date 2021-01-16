import React, { useRef, useState } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'

import Meta from '../components/Meta'
import Navigation from '../components/Navigation'
import Blog from '../components/Blog'
import UALogo from '../assets/UA_logo_long_dark.svg'
import '../assets/fonts/BigNoodle.css'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#f5f4f2"
    }
  },
  typography: { fontFamily: 'Amatic SC, Permanent Marker, Roboto' },
})

const useStyles = makeStyles(theme => {
  const page = {
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  }

  return {
    whitePage: {
      backgroundColor: '#f5f4f2',
      ...page
    },
    blackPage: {
      backgroundColor: '#212121',
      borderTop: 'solid #212121 2px',
      ...page
    },
    slice: {
      height: theme.spacing(10),
      position: "relative",
      clipPath: `polygon(0 0, 0 0, 100% 100%, 0 100%);`,
      background: "#212121"
    },
    slash: {
      height: theme.spacing(10),
      clipPath: `polygon(100% 0, 0 0, 0% 100%, 0 100%);`,
      background: "#212121"
    },
    grid: {
      textAlign: 'center',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    },
    icon: {
      [theme.breakpoints.down('md')]: { maxWidth: '200px', maxHeight: '100px' },
      [theme.breakpoints.up('md')]: { maxWidth: '300px', maxHeight: '200px' },
      [theme.breakpoints.up('lg')]: { maxWidth: '300px', maxHeight: '200px' },
    }
  }
})

export default function FrontPage() {
  const classes = useStyles();
  const [activePage, setActivePage] = useState(0)
  const scrollRefs = [
    useRef(null), // home
    useRef(null), // contract
    useRef(null), // games
    useRef(null), // blog
    useRef(null) // team
  ];

  const onNavigation = (e) => {
    setActivePage(e)
    scrollRefs[e].current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <CssBaseline />
      <Navigation activePage={activePage} onNavigation={onNavigation} />


      <Grid ref={scrollRefs[0]} container className={classes.whitePage}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} >
            <UALogo className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.slice}></Grid>

      <Grid ref={scrollRefs[1]} container className={classes.blackPage}>
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            about us
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.slash}></Grid>

      <Grid ref={scrollRefs[2]} container className={classes.whitePage}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} >
            games
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.slice}></Grid>

      <Grid ref={scrollRefs[3]} container className={classes.blackPage}>
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.slash}></Grid>

      <Grid ref={scrollRefs[4]} container className={classes.whitePage}>
        <Grid container className={classes.grid}>
          <Grid item xs={12} >
            team
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
