import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../Profile'

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.LayoutMain>{children}</S.LayoutMain>
      <aside>
        <Profile />
      </aside>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
