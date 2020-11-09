/**
 * @file Eye.js
 *
 * @see https://evacremers.com/the-lab/
 */
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import styles from './Eye.module.css'

const Eye = (props) => {
  const { tagName: Tag, className, variant, children } = props

  let outerContainer = useRef()
  let eye1 = useRef()

  useEffect(() => {
    /**
     *
     * @param {*} e
     * @param {*} eye
     */
    const rotateEye = (e, eye) => {
      let mouseX = eye.current.getBoundingClientRect().left
      let mouseY = eye.current.getBoundingClientRect().top
      let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY)
      let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180
      eye.current.style.transform = `rotate(${rotationDegrees}deg)`
    }
    const mouseMove = (e) => {
      rotateEye(e, eye1)
    }
    document.addEventListener('mousemove', mouseMove)
    return () => {
      document.removeEventListener('mousemove', mouseMove)
    }
  }, [outerContainer])

  return (
    <Tag
      ref={outerContainer}
      className={`${styles.eye} ${
        styles[`eye__${variant}`]
      } ${className} outer-container`}
    >
      <div className="mx-auto pointer-events-none select-none eye-container cur">
        <div className="absolute flex text-center eye-lid">
          <div
            ref={eye1}
            className="absolute flex text-center eyes"
            style={{
              transform: 'rotate(176.094deg)',
            }}
          >
            <div className="relative inline-block eye"></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .outer-container {
          font-size: 25vmin;
        }
        .eye-container {
          font-size: 0.7em;
          width: 100px;
          height: 200px;
          border-radius: 0.5em 0.5em 0em 0em / 0.6em 0.6em 0em 0em;
          box-sizing: content-box;
          border: 0.07em solid transparent;
          top: 2em;
          cursor: inherit;
        }

        .eye-lid {
          background-image: url(/png/eye-150.png);
          background-size: cover;
          border-radius: 50%;
        }

        .eyes,
        .eye-lid {
          font-size: 0.65em;
          width: 1.2em;
          height: 1.2em;
          top: 0.3em;
        }
        .eyes {
          left: 0.25em;
        }
        .eye {
          border-radius: 50%;
          width: 80%;
          height: 80%;
          background-image: url(/jpg/cremers-eye-pupil.jpg);
          background-size: cover;
          background-color: black;
          border-radius: 50%;
        }
      `}</style>
    </Tag>
  )
}

Eye.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

Eye.defaultProps = {
  tagName: 'div',
  className: 'h-full',
  variant: 'default',
  children: '',
}

export default Eye
