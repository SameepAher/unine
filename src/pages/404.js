import * as React from 'react'
import Layout from 'atoms/Layout'
import Seo from 'atoms/Seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className="text-center py-[100px] lg:py-[203.5px]">
      <div className="font-semibold text-4xl">Page not found</div>
      <div className="mt-12">
        <Link to={'/'} className="rounded-xl px-4 py-4 text-gray-800 bg-green-300">
          Go back to Home Page
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
