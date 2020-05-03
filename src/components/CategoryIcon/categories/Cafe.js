import React from "react"
import PropTypes from "prop-types"

const SVG = ({ className, size }) => (
  <svg viewBox="0 0 456 456" className={className} {...size}>
    <path
      d="M335.336 320.124H364c28.719 0 52-23.281 52-52s-23.281-52-52-52h-25.336l-1-40.336 26.336.336c50.81 0 92 41.19 92 92s-41.19 92-92 92l-32.664-.336 4-39.664z"
      fill="#936f46"
    />
    <path
      d="M0 152.124h344V315.46c0 60.013-48.651 108.664-108.664 108.664H108.664C48.651 424.124 0 375.474 0 315.46V152.124z"
      fill="#a48250"
    />
    <path d="M96 424.124h152v24H96v-24z" fill="#7f5e39" />
    <g fill="#e6e6e6">
      <path d="M89.168 112.124a8 8 0 0 1-7.344-11.152l3.464-8.096a37.92 37.92 0 0 0-.488-29.272 53.482 53.482 0 0 1-.8-42.536l3.472-8.096a8 8 0 0 1 10.359-4.548 8 8 0 0 1 4.337 10.851l-3.464 8.096a37.92 37.92 0 0 0 .488 29.272 53.482 53.482 0 0 1 .8 42.536l-3.472 8.096a7.998 7.998 0 0 1-7.352 4.849zM161.168 112.124a8 8 0 0 1-7.344-11.152l3.464-8.096a37.92 37.92 0 0 0-.488-29.272 53.482 53.482 0 0 1-.8-42.536l3.472-8.096a8 8 0 0 1 10.359-4.548 8 8 0 0 1 4.337 10.851l-3.464 8.096a37.92 37.92 0 0 0 .488 29.272 53.482 53.482 0 0 1 .8 42.536l-3.472 8.096a7.998 7.998 0 0 1-7.352 4.849zM233.168 112.124a8 8 0 0 1-7.344-11.152l3.464-8.096a37.92 37.92 0 0 0-.488-29.272 53.482 53.482 0 0 1-.8-42.536l3.472-8.096a8 8 0 1 1 14.696 6.303l-3.464 8.096a37.92 37.92 0 0 0 .488 29.272 53.482 53.482 0 0 1 .8 42.536l-3.472 8.096a7.998 7.998 0 0 1-7.352 4.849z" />
    </g>
  </svg>
)

SVG.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default SVG