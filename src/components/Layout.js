import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

import Meta from "./Meta"
import Navigation from "./Navigation"

const theme = createMuiTheme({
  palette: { type: "dark" },
  typography: { fontFamily: "Amatic SC, Permanent Marker, Roboto" },
})

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <CssBaseline />
      <Navigation />
      <div>{children}</div>
    </ThemeProvider>
  )
}
