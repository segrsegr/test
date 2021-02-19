import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Breadcrumbs.module.scss'

function BreadcrumbsLink ({ className, ...props }) {
  return (
    <a
      className={classNames(styles.link, className)}
      {...props}
    />
  )
}

BreadcrumbsLink.propTypes = {
  className: PropTypes.string
}

export default BreadcrumbsLink
