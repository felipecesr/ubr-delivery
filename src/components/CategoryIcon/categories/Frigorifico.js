import React from "react"
import PropTypes from "prop-types"

const SVG = ({ className, size }) => (
  <svg viewBox="0 0 128 128" className={className} {...size}>
    <path
      d="M21.851 112.513L35.574 98.79l-6.364-6.364-13.723 13.723a5.535 5.535 0 10-3.5 9.862 5.535 5.535 0 109.862-3.5z"
      fill="#eaeaf0"
    />
    <path
      d="M118.637 67.4c-23.448 23.449-54.78 23.658-78.317 39.815a6 6 0 01-7.652-.687l-11.2-11.2a6 6 0 01-.687-7.652C36.942 64.143 37.151 32.811 60.6 9.363z"
      fill="#fd637b"
    />
    <path
      d="M61.432 91.922a1.75 1.75 0 01-.617-3.388c2.14-.805 4.283-1.577 6.416-2.339a1.75 1.75 0 111.176 3.3 391.246 391.246 0 00-6.359 2.318 1.753 1.753 0 01-.616.109z"
      fill="#ff3e63"
    />
    <ellipse
      cx="89.618"
      cy="38.382"
      fill="#fcb49c"
      rx="18.647"
      ry="41.039"
      transform="rotate(-45 89.617 38.401)"
    />
    <path
      d="M110.6 64.264c-6.464 0-18.226-5.238-29.928-16.94-14.891-14.894-19.39-30.158-15.83-33.718a5.565 5.565 0 013.791-1.106c6.465 0 18.226 5.238 29.928 16.939 14.894 14.9 19.394 30.159 15.833 33.72a5.571 5.571 0 01-3.794 1.105z"
      fill="#e58f8b"
    />
    <path
      d="M96.661 47.068c-2.169 0-6.117-1.757-10.044-5.685-5-5-6.509-10.122-5.314-11.317a1.871 1.871 0 011.272-.371c2.17 0 6.117 1.758 10.045 5.686 5 5 6.509 10.122 5.314 11.317a1.873 1.873 0 01-1.273.37z"
      fill="#fd637b"
    />
  </svg>
)

SVG.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default SVG
