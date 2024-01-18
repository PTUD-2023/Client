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
      icon: 'Users',
      pathname: '/user/profile',
      title: 'Thông tin tài khoản'
    },
    {
      icon: 'FileText',
      title: 'Danh sách đơn đăng ký',
      pathname: '/user/user-form-management'
    },
    {
      icon: 'HeartHandshake',
      title: 'Hợp đồng của tôi',
      pathname: '/user/user-contract-management'
    },
    {
      icon: 'History',
      title: 'Lịch sử yêu cầu',
      pathname: '/user/user-request-management'
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
