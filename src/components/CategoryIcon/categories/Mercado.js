import React from "react"
import PropTypes from "prop-types"

const SVG = ({ className, size }) => (
  <svg viewBox="0 0 512 512" className={className} {...size}>
    <path
      d="M377 61h-91c-8.291 0-15 6.709-15 15v120c0 8.291 6.709 15 15 15h121c8.291 0 15-6.709 15-15v-90c0-24.814-20.186-45-45-45z"
      fill="#e667a8"
    />
    <path
      d="M286 211h-90c-8.291 0-15-6.709-15-15V61c0-33.091 26.909-61 60-61s60 27.909 60 61v135c0 8.291-6.709 15-15 15z"
      fill="#f9bc35"
    />
    <path
      d="M407 121c-41.353 0-76 33.647-76 75 0 8.291 6.709 15 15 15h121c8.291 0 15-6.709 15-15 0-41.352-33.647-75-75-75z"
      fill="#51dae6"
    />
    <g fill="#f39e31">
      <path d="M301 121h-45c-8.291 0-15 6.709-15 15s6.709 15 15 15h45v-30zM301 61h-45c-8.291 0-15 6.709-15 15s6.709 15 15 15h45V61z" />
    </g>
    <path
      d="M466.99 181H146.913c-.381 0-.747.015-1.113.044l-5.186-28.462C134.14 116.899 102.07 91 65.771 91H15c-8.291 0-15 6.709-15 15s6.709 15 15 15h50.771c21.797 0 41.444 15.542 45.341 36.943l35.654 197.099a44.897 44.897 0 006.553 16.517C142.788 379.803 136 392.619 136 407c0 24.814 20.186 45 45 45h285c8.291 0 15-6.709 15-15s-6.709-15-15-15H181c-8.276 0-15-6.724-15-15s6.724-15 15-15c1.255 0 2.467-.171 3.632-.46 2.096.299 4.232.46 6.402.46h255.961c22.075 0 40.737-15.806 44.385-37.603l19.995-121C515.959 205.925 494.729 181 466.99 181zm.105 30c9.3 0 16.199 8.399 14.7 17.399l-2.1 12.601H156.7l-5.4-30h315.795zM190.901 362c-7.2 0-13.2-5.101-14.7-12.301L162.1 271H211v91h-20.099zM241 271h30v91h-30v-91zm220.995 78.399c-1.201 7.202-7.5 12.601-15 12.601H301v-91h173.895l-12.9 78.399z"
      fill="#a1a7b3"
    />
    <g fill="#979ca7">
      <path d="M466 422H316v30h150c8.291 0 15-6.709 15-15s-6.709-15-15-15zM466.991 181H316v30h151.095c9.3 0 16.199 8.399 14.7 17.399l-2.1 12.601H316v30h15v91h-15v30h130.996c22.075 0 40.737-15.806 44.385-37.603l19.995-121C515.959 205.924 494.729 181 466.991 181zM362 271h30v91h-30v-91zm99.995 78.399c-1.201 7.202-7.5 12.601-15 12.601H422v-91h52.895l-12.9 78.399z" />
    </g>
    <path
      d="M196 512c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z"
      fill="#5c5f66"
    />
    <path
      d="M241 467c0-24.814-20.186-45-45-45v90c24.814 0 45-20.185 45-45z"
      fill="#53565c"
    />
    <path
      d="M196 452c-8.276 0-15 6.724-15 15s6.724 15 15 15 15-6.724 15-15-6.724-15-15-15z"
      fill="#e6eeff"
    />
    <path
      d="M211 467c0-8.276-6.724-15-15-15v30c8.276 0 15-6.724 15-15z"
      fill="#dae2f2"
    />
    <path
      d="M406 512c-24.814 0-45-20.186-45-45s20.186-45 45-45 45 20.186 45 45-20.186 45-45 45z"
      fill="#5c5f66"
    />
    <path
      d="M451 467c0-24.814-20.186-45-45-45v90c24.814 0 45-20.185 45-45z"
      fill="#53565c"
    />
    <path
      d="M406 452c-8.276 0-15 6.724-15 15s6.724 15 15 15 15-6.724 15-15-6.724-15-15-15z"
      fill="#e6eeff"
    />
    <path
      d="M421 467c0-8.276-6.724-15-15-15v30c8.276 0 15-6.724 15-15z"
      fill="#dae2f2"
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
