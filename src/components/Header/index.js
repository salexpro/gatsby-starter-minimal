import React from 'react'
import { Container } from 'react-bootstrap'
import { header, header__logo } from './style.module.scss'

import Menu from '~components/Menu'

const Header = ({ siteTitle }) => (
  <Container as="header" className={header}>
    <div className={header__logo}>{siteTitle}</div>
    <Menu />
  </Container>
)

export default Header
