import React from 'react'
import {Link, NavLink,} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'

import { logo } from 'src/assets/brand/logo'
import {useAuth} from "./context/auth";

const AppHeader = () => {
  const [auth,setAuth]=useAuth();
  console.log(auth)
  const name=auth?.user?.firstName;
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const logout =()=>{
    localStorage.removeItem('auth');

    window.location.href="/"
  }
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
           <h1 className={'p-2'}>{name}</h1>
          </CNavItem>

        </CHeaderNav>
        <CHeaderNav>


        </CHeaderNav>
        <CHeaderNav className="ms-3">
          { auth?.token ? <button onClick={logout} className={'btn btn-link'}>logout</button> : <Link className={'btn btn-link'}>LogIn</Link>}
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
