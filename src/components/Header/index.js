import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import * as style from './style.module.scss'
import Menu from '~components/Menu'

const Header = ({ siteTitle }) => (
  <Container as="header" className={style.header}>
    <div className={style.header__logo}>{siteTitle}</div>
    <Menu />
  </Container>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
