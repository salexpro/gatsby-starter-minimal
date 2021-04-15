import React from 'react'
import { Container } from 'react-bootstrap'

import Menu from '~components/Menu'

import { footer, footer__logo, footer__copy } from './style.module.scss'

const Footer = ({ siteTitle }) => {
  return (
    <Container as="footer" className={footer}>
      <div className={footer__logo}>{siteTitle}</div>
      <Menu variant="footer" />
      <div className={footer__copy}>© 2021 {siteTitle}. All Rights Reserved</div>
    </Container>
  )
}

export default Footer
