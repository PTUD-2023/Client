import http from 'src/utils/http'
import { UserInfor } from 'src/types/user.type'

const URL_GET_USER_INFOR = 'user/infor'

const userAccountApi = {
  getUserInfor: () => {
    return http.get<UserInfor>(URL_GET_USER_INFOR)
  }
}

export default userAccountApi
