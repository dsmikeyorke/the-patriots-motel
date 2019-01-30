import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const HeaderWrapper = styled('header')``
const HeaderContainer = styled('div')``
const Logo = styled('div')``
const Navigation = styled('nav')``
const NavigationList = styled('ul')``
const NavigationListItem = styled('li')``
const NavigationLink = styled(Link)``

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <Navigation>
        <NavigationList>
          <NavigationListItem>
            <NavigationLink to="/rooms">Rooms</NavigationLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationLink to="/san-clemente">San Clemente</NavigationLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationLink to="/contact-reservations">
              Contact &amp; Reservations
            </NavigationLink>
          </NavigationListItem>
        </NavigationList>
      </Navigation>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
