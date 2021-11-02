import React from 'react'
import { Container } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '~components/Menu'

import * as style from './style.module.scss'

const Footer = ({ siteTitle }) => {
  return (
    <Container as="footer" className={style.footer}>
      <div className={style.footer__logo}>{siteTitle}</div>
      <Menu variant="footer" />
      <div className={style.footer__copy}>
        © 2021 {siteTitle}. All Rights Reserved
      </div>
    </Container>
  )
}

Footer.defaultProps = {
  siteTitle: '',
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
