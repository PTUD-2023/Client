import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { icons } from 'src/components/Lucide'

export interface Menu {
  icon: keyof typeof icons
  title: string
  pathname?: string
  subMenu?: Menu[]
  ignore?: boolean
}

export interface SideMenuState {
  menu: Array<Menu | 'divider'>
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: 'Home',
      pathname: '/user/profile',
      title: 'Thông tin'
    },
    {
      icon: 'Users',
      title: 'Quản lý tài khoản',
      pathname: '/admin/account-management'
    },
    {
      icon: 'FileText',
      title: 'Hợp đồng của tôi',
      pathname: '/admin/form-management'
    },
    {
      icon: 'HeartHandshake',
      title: 'Quản lý hợp đồng',
      pathname: '/admin/contract-management'
    },
    {
      icon: 'ShieldCheck',
      title: 'abc',
      pathname: '/admin/insurance-package-management'
    }
  ]
}

export const userSideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {}
})

export const selectUserSideMenu = (state: RootState) => state.rootReducer.userSideMenu.menu

export default userSideMenuSlice.reducer
