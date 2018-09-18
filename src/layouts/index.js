import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import i18n from '../i18n/i18n'

const Layout = ({children}) => (
  <div>
    <Helmet
      title="Belgrade Design"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]} />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
