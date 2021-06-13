/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)

  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description },
          { name: "keywords", content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header />
      {children}
      <Footer>
        Backgrounds made in Cinema 4D, iOS app in Swift, site in React.{" "}
        <a href="mailto:support@designcode.io">Email us</a> to ask anything. ©
        2018
      </Footer>
    </div>
    // <>
    //   <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    //   <div
    //     style={{
    //       margin: `0 auto`,
    //       maxWidth: 960,
    //       padding: `0 1.0875rem 1.45rem`,
    //     }}
    //   >
    //     <main>{children}</main>
    //     <footer
    //       style={{
    //         marginTop: `2rem`,
    //       }}
    //     >
    //       © {new Date().getFullYear()}, Built with
    //       {` `}
    //       <a href="https://www.gatsbyjs.com">Gatsby</a>
    //     </footer>
    //   </div>
    // </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
