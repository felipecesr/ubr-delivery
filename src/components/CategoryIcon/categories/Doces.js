import React from "react"
import PropTypes from "prop-types"

const SVG = ({ className, size }) => (
  <svg viewBox="0 0 44 60" className={className} {...size}>
    <g fill-rule="nonzero" fill="none">
      <path
        d="M40.93 41.45v.01c-.323 1.789-1.84 8.633-7.531 16.963-.28.411-.704.704-1.188.821C30.986 59.54 28.1 60 22 60s-8.986-.46-10.211-.756a2.013 2.013 0 0 1-1.188-.821C4.91 50.093 3.393 43.249 3.07 41.46l3.847-4 29.437-.008z"
        fill="#e57e25"
      />
      <path
        d="M40.37 25.96a24.086 24.086 0 0 1 3.38 7.48 8.157 8.157 0 0 1-.72 5.88 7.415 7.415 0 0 1-3.3 2.81c-3.25 1.47-7.96 1.53-10.58-1.23a5.661 5.661 0 0 1-.229-.257.988.988 0 0 0-1.617.162 6 6 0 0 1-10.608 0 .988.988 0 0 0-1.617-.162 5.661 5.661 0 0 1-.229.257c-2.62 2.76-7.33 2.7-10.58 1.23a7.415 7.415 0 0 1-3.3-2.81 8.157 8.157 0 0 1-.72-5.88 21.084 21.084 0 0 1 2.46-5.95l5.457-4.24 27.416-1z"
        fill="#f0c419"
      />
      <path
        d="M31.25 16.47a20.42 20.42 0 0 1 7.22 5.25 8.087 8.087 0 0 1 1.49 2.25c.2.49.69 1.43.41 1.99a.762.762 0 0 1-.43.37 1.212 1.212 0 0 1-.73 0c-.9-.24-1.79-.53-2.69-.8a2.37 2.37 0 0 0-1.83-.01c-1.19.71-.36 2.57-.28 3.59.09 1.25-.54 3.33-2.22 2.78a3 3 0 0 1-1.49-1.47c-.57-1-1.02-2.08-1.66-3.04a4.856 4.856 0 0 0-2.66-2.11 2.585 2.585 0 0 0-2.97 1.17c-.62 1.29.22 2.86-.21 4.22a2.115 2.115 0 0 1-1.7 1.49c-.816.1-1.59-.384-1.86-1.16-.24-.82.21-1.66.31-2.51a3.057 3.057 0 0 0-2.24-3.24 3 3 0 0 0-3.11 1.28c-.79 1.23-.33 2.94.01 4.25.354.975.307 2.05-.13 2.99a2.357 2.357 0 0 1-4.38-.89c-.21-1.67 1.36-3.34.76-4.91a2.2 2.2 0 0 0-1.73-1.32 2.912 2.912 0 0 0-2.37.83c-.39.36-.74.76-1.15 1.1a2.125 2.125 0 0 1-1 .51 1.723 1.723 0 0 1-1.77-1.15 2.226 2.226 0 0 1-.13-.44 3.5 3.5 0 0 1 .06-1.51c.258-.956.68-1.86 1.25-2.67a15.2 15.2 0 0 1 3.75-3.62 31.174 31.174 0 0 1 2.88-1.79 27.391 27.391 0 0 1 3.73-1.73z"
        fill="#805333"
      />
      <path
        d="M19.83 20.43c-.01 0-.03-.01-.04-.01a10.159 10.159 0 0 1-5.41-4.25c-2.07-3.35-1.88-7.64 1.03-10.26a6.144 6.144 0 0 1 2.39-1.36 4.921 4.921 0 0 1 4.21.8 4.255 4.255 0 0 1 1.43 1.83 1.022 1.022 0 0 0 1.44.49 4.149 4.149 0 0 1 2.24-.56 4.969 4.969 0 0 1 3.82 1.95 6.177 6.177 0 0 1 1.07 2.56 7.3 7.3 0 0 1-.76 4.85 8.736 8.736 0 0 1-4.54 3.89"
        fill="#df4d60"
      />
      <path
        d="M23.942 8.691a1 1 0 0 1-1-1c0-1.731.873-4.8 3.279-6.164 2.047-1.16 4.615-.83 7.631.978a1 1 0 0 1-1.028 1.715c-2.352-1.41-4.242-1.73-5.617-.952-1.711.969-2.265 3.4-2.265 4.423a1 1 0 0 1-1 1z"
        fill="#24ae5f"
      />
      <path
        d="M22.6 21.508a52.1 52.1 0 0 1-7.764-.521 1 1 0 0 1 .324-1.974c4.926.65 9.915.66 14.843.029a1 1 0 1 1 .255 1.984 60.3 60.3 0 0 1-7.658.482z"
        fill="#603e26"
      />
      <g fill="#d25627">
        <path d="M15 57a1 1 0 0 1-.833-.445c-2.051-3.076-4.033-8.989-4.117-9.239a1.001 1.001 0 0 1 1.9-.632c.019.059 1.981 5.909 3.883 8.761A1 1 0 0 1 15 57zM19 56a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1zM29 57a1 1 0 0 1-.831-1.555c1.9-2.855 3.864-8.7 3.883-8.761a1.001 1.001 0 0 1 1.9.632c-.084.25-2.066 6.163-4.117 9.239A1 1 0 0 1 29 57zM25 56a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v7a1 1 0 0 1-1 1z" />
      </g>
      <path
        d="M16.708 10.9a1 1 0 0 1-.937-1.349c.209-.634.56-1.21 1.029-1.686a2.708 2.708 0 0 1 2.246-.777 1 1 0 1 1-.3 1.977.769.769 0 0 0-.559.241c-.25.27-.435.591-.545.942a1 1 0 0 1-.934.652z"
        fill="#fb7b76"
      />
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
