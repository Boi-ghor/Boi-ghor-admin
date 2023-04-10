import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPuzzle, cilSpeedometer, cilSettings,cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'


const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Blog',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Blog',
        to: '/addblog',
      },
      {
        component: CNavItem,
        name: 'All Blogs',
        to: '/allblog',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'All user',
    to: '/all-user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Category',
    to: '/category',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Category',
        to: '/create-category',
      },
      {
        component: CNavItem,
        name: 'All Category',
        to: '/all-category',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Authors',
    to: '/authors',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Author',
        to: '/create-author',
      },
      {
        component: CNavItem,
        name: 'All Authors',
        to: '/all-author',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Publishers',
    to: '/publishers',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Publisher',
        to: '/create-publisher',
      },
      {
        component: CNavItem,
        name: 'All Publishers',
        to: '/all-publishers',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Books',
    to: '/books',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Book',
        to: '/create-Book',
      },
      {
        component: CNavItem,
        name: 'All Category',
        to: '/all-category',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Setting',
    to: '/setting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  }

]
export default _nav
