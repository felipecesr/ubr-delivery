import React from "react"
import PropTypes from "prop-types"

const SVG = ({ className, size }) => (
  <svg viewBox="0 -17 512 512" className={className} {...size}>
    <path
      d="M460.176 295.887H52.008c-14.024 0-25.39 11.367-25.39 25.39v22.243c0 5.52 4.476 9.992 9.995 9.992H475.57c5.52 0 9.996-4.473 9.996-9.992v-22.243c0-14.02-11.367-25.39-25.39-25.39zm0 0"
      fill="#912c2c"
    />
    <path
      d="M460.176 295.887h-34.203v57.625h49.597c5.52 0 9.996-4.477 9.996-9.996v-22.239c0-14.023-11.367-25.39-25.39-25.39zm0 0"
      fill="#7c1e1e"
    />
    <path
      d="M477.254 265.559c13.219 0 24.36 10.98 24.371 24.761.012 19.684-22.426 30.098-48.492 26.282-24.348-3.563-24.656-14.762-49.309-14.762-24.656 0-24.656 14.762-49.308 14.762-24.657 0-24.657-14.762-49.309-14.762-24.652 0-24.652 14.762-49.309 14.762-24.652 0-24.652-14.762-49.308-14.762-24.652 0-24.652 14.762-49.305 14.762-24.656 0-24.656-14.762-49.312-14.762-24.653 0-24.961 11.2-49.309 14.762-26.066 3.816-48.504-6.598-48.488-26.282.008-13.78 11.152-24.761 24.37-24.761zm0 0"
      fill="#a0e557"
    />
    <path
      d="M501.625 290.32c-.012-13.78-11.152-24.761-24.371-24.761h-37v47.859c3.5 1.293 7.629 2.418 12.879 3.184 26.066 3.816 48.504-6.598 48.492-26.282zm0 0"
      fill="#93cc4a"
    />
    <path
      d="M491.215 348.395H20.785C9.31 348.395 0 357.699 0 369.18c0 59.683 48.383 108.062 108.063 108.062h295.875c59.68 0 108.062-48.379 108.062-108.058 0-11.485-9.309-20.79-20.785-20.79zm0 0"
      fill="#efa335"
    />
    <path
      d="M491.215 348.395h-38.7v41.574c0 48.203-39.074 87.277-87.277 87.277h38.7C463.618 477.242 512 428.863 512 369.184c0-11.485-9.309-20.79-20.785-20.79zm0 0"
      fill="#fd8f31"
    />
    <path
      d="M460.086 239.098H51.914c-14.02 0-25.387-11.368-25.387-25.387v-22.242c0-5.52 4.473-9.996 9.993-9.996h438.96c5.52 0 9.993 4.476 9.993 9.996v22.242c0 14.02-11.368 25.387-25.387 25.387zm0 0"
      fill="#fc4e51"
    />
    <path
      d="M475.48 181.477h-49.414v42.226c0 8.504-6.89 15.395-15.394 15.395h49.414c14.02 0 25.387-11.368 25.387-25.387v-22.242a9.99 9.99 0 0 0-9.993-9.992zm0 0"
      fill="#ea3942"
    />
    <path
      d="M481.523 234.273H30.953c-10.215 0-18.894 8.36-18.703 18.575.188 9.91 8.273 17.882 18.227 17.882h286.277c4.652 0 9.148 1.66 12.68 4.688l40.629 34.812c11.867 10.168 29.585 9.407 40.535-1.742l31.37-31.93a19.478 19.478 0 0 1 13.9-5.828h25.179c10.219 0 18.894-8.363 18.703-18.578-.188-9.906-8.273-17.879-18.227-17.879zm0 0"
      fill="#fccf3f"
    />
    <path
      d="M256 0C17.648.09 0 157.324 0 179.59c0 11.48 9.309 20.789 20.785 20.789h470.43c11.476 0 20.785-9.309 20.785-20.79C512 157.325 494.352.09 256 0zm0 0"
      fill="#efa335"
    />
    <path
      d="M511.996 179c0-.066-.004-.137-.004-.203-.004-.149-.004-.3-.008-.457-.004-.074-.004-.153-.007-.227-.004-.164-.008-.328-.016-.5a4.695 4.695 0 0 1-.008-.234c-.008-.184-.015-.375-.027-.57 0-.07-.004-.137-.008-.207-.012-.23-.023-.465-.04-.707a105.855 105.855 0 0 0-.453-5.34v-.008C507.056 130.375 472.97.082 256 0a500.085 500.085 0 0 0-29.742.879C370.656 9.527 423.445 80.645 442.34 131.19c7.95 21.27-7.953 43.907-30.656 43.907H20.785c-8.558 0-15.906-5.176-19.094-12.57C.363 170.417 0 176.394 0 179.59c0 11.48 9.309 20.789 20.785 20.789h470.43c11.476 0 20.785-9.309 20.785-20.79 0-.187-.004-.382-.004-.589zm0 0"
      fill="#fd8f31"
    />
    <path
      d="M481.523 234.273h-41.27v44.032l1.712-1.746a19.487 19.487 0 0 1 13.902-5.829h25.18c10.215 0 18.894-8.363 18.703-18.578-.187-9.906-8.273-17.879-18.227-17.879zm0 0"
      fill="#efc03c"
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
