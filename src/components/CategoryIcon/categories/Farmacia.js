import React from "react"
import PropTypes from "prop-types"

const SVG = ({ className, size }) => (
  <svg viewBox="0 0 64 64" className={className} {...size}>
    <path
      d="M7 41a3.966 3.966 0 0 0-2.488.89l4.976 6.22A3.985 3.985 0 0 0 7 41zM29 43a3.966 3.966 0 0 0-.89-2.488l-6.22 4.976A3.985 3.985 0 0 0 29 43z"
      fill="#e33e5c"
    />
    <rect x="5" y="30" width="16" height="6" rx="3" ry="3" fill="#e33e5c" />
    <path fill="#3b73a5" d="M60 54H34V25l2-5h22l2 5v29z" />
    <path fill="#cfdfe8" d="M34 25h26v24H34z" />
    <circle cx="47" cy="37" r="8" fill="#fff" />
    <path fill="#e33e5c" d="M51 35h-2v-2h-4v2h-2v4h2v2h4v-2h2v-4z" />
    <path fill="#2f3e4f" d="M36 16h22v4H36z" />
    <path fill="#69b1d5" d="M33 10h28v6H33z" />
    <path
      fill="#3b73a5"
      d="M36 10h2v3h-2zM40 10h2v3h-2zM44 10h2v3h-2zM48 10h2v3h-2zM52 10h2v3h-2zM56 10h2v3h-2z"
    />
    <path
      d="M4.512 41.89a3.983 3.983 0 1 0 4.976 6.22zM28.11 40.512a3.983 3.983 0 1 0-6.22 4.976zM18 30h-5v6h5a3 3 0 0 0 0-6z"
      fill="#f98c96"
    />
    <circle cx="17" cy="52" r="3" fill="#f98c96" />
  </svg>
)

SVG.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
}

export default SVG
