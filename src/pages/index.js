import * as React from 'react'
import HomeSection1 from 'organisms/HomeSection1'
import HomeSection2 from 'organisms/HomeSection2'
import HomeSection3 from 'organisms/HomeSection3'
import HomeSection4 from 'organisms/HomeSection4'
import HomeSection5 from 'organisms/HomeSection5'
import HomeSection6 from 'organisms/HomeSection6'
import Layout from 'atoms/Layout'
import Seo from 'atoms/Seo'

const IndexPage = () => (
  <Layout>
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    <HomeSection4 />
    <HomeSection5 />
    <HomeSection6 />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
