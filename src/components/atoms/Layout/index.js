/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import NavigationBar from 'organisms/NavigationBar'
import Footer from 'organisms/Footer'

const Index = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  )
}

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
