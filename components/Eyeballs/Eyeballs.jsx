/**
 * @file Eyeballs.js
 *
 * @see https://evacremers.com/the-lab/
 */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './Eyeballs.module.css'

import Eye from '../Eye'

const Eyeballs = (props) => {
  const { tagName: Tag, className, variant, children } = props

  return (
    <Tag
      className={`${styles.eyeballs} ${
        styles[`eyeballs__${variant}`]
      } ${className}`}
    >
      <div
        className="absolute flex flex-row items-center justify-center w-screen h-auto mx-auto pointer-events-none select-none align-center"
        style={{
          zIndex: 99,
        }}
      >
        <Eye />
        <Eye className="pl-20" />
      </div>
    </Tag>
  )
}

Eyeballs.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

Eyeballs.defaultProps = {
  tagName: 'div',
  className: '',
  variant: 'default',
  children: '',
}

export default Eyeballs
