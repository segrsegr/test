import React, { Children, useRef, useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Breadcrumbs.module.scss'

function getElementWidth (elem) {
  const paddingLeft = parseInt(getComputedStyle(elem).paddingLeft)
  const paddingRight = parseInt(getComputedStyle(elem).paddingRight)

  return elem.clientWidth - paddingLeft - paddingRight
}

function Breadcrumbs ({
  className,
  labelNav,
  hidden,
  children,
  ...props
}) {
  const navRef = useRef(null)
  const olRef = useRef(null)
  const [needMiss, setNeedMiss] = useState(0)
  const [freeWidth, setFreeWidth] = useState(false)

  if (hidden || Children.count(children) < 2) {
    return null
  }

  useLayoutEffect(() => {
    setFreeWidth(getElementWidth(navRef.current) - getElementWidth(olRef.current))
  })

  useLayoutEffect(() => {
    if ((needMiss - 2) < Children.count(children)) {
      if (typeof freeWidth === 'number' && freeWidth < 200) {
        setNeedMiss((prev) => prev + 1)
      }
    }
  })

  function renderChildren (children) {
    const arrayChildren = Children.toArray(children)

    if (needMiss > 0) {
      if ((arrayChildren.length - needMiss) < 2) {
        arrayChildren.splice(1, arrayChildren.length - 2, '...')
      } else {
        arrayChildren.splice(1, needMiss, '...')
      }
    }

    const lastChildIndex = arrayChildren.length - 1

    return arrayChildren.map((child, index) => (index !== lastChildIndex
      ? (
          <li key={index} className={styles.item}>
            {child}
          </li>
        )
      : (
          <li
              key={index}
              className={classNames(styles.item, styles.lastItem)}
              aria-current='page'
          >
            {child.props.children}
          </li>
        )
    ))
  }

  return (
    <nav
      ref={navRef}
      className={classNames(styles.root, className)}
      aria-label={labelNav}
      {...props}
    >
      <ol ref={olRef} className={styles.list}>
        {renderChildren(children)}
      </ol>
    </nav>
  )
}

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  labelNav: PropTypes.string,
  hidden: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Breadcrumbs
