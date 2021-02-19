import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumbs, { BreadcrumbsLink } from './'

function BreadcrumbsMapper ({ items, labelNav, ...props }) {
  return (
      <Breadcrumbs labelNav={labelNav} {...props}>
          {items.map((item, index) => (<BreadcrumbsLink key={index} href={item.url}>{item.title}</BreadcrumbsLink>))}
      </Breadcrumbs>
  )
}

BreadcrumbsMapper.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  labelNav: PropTypes.string,
  hidden: PropTypes.bool
}

export default BreadcrumbsMapper
