import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled('footer')``
const FooterContainer = styled('div')``
const Logo = styled('div')``
const Address = styled('address')``
const Phone = styled('div')``
const Email = styled('div')``
const Label = styled('span')``

const SocialLinks = styled('div')``
const SocialLink = styled('a')``
const Copyright = styled('div')``

const Footer = ({ siteTitle }) => (
  <FooterWrapper>
    <FooterContainer>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <Address>711 S. El Camino Real, San Clemente CA 92672</Address>
      <Phone>
        <Label>Phone</Label>
        {` `}
        1-877-350-0053
      </Phone>
      <Email>
        <Label>Email</Label>
        {` `}
        <a href="mailto:info@thepatriotsmotel.com">info@thepatriotsmotel.com</a>
      </Email>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com/ThePatriotsMotel">
          Facebook
        </SocialLink>
        <SocialLink href="http://instagram.com/patriotsboutique">
          Instagram
        </SocialLink>
        <SocialLink href="https://twitter.com/PatriotsMotel">
          Twitter
        </SocialLink>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()}, Built with</Copyright>
    </FooterContainer>
  </FooterWrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
