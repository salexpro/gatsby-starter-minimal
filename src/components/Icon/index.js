import React from 'react'
import PropTypes from 'prop-types'
import sprite from './icons.svg'

const param = (param) => (typeof param === 'object' ? param : [param, param])

const Icon = ({ name, size, viewbox }) => {
  const sizes = param(size)
  const vbox = viewbox ? param(viewbox) : sizes
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={sizes[0]} height={sizes[1]} viewBox={`0 0 ${vbox[0]} ${vbox[1]}`}>
      <use fill="currentColor" xlinkHref={`${sprite}#${name}`} />
    </svg>
  )
}

Icon.defaultProps = {
  size: [24, 24],
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  viewbox: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
}

export default Icon
