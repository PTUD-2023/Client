import { ListRegistrationFormType, newRegistrationFormType } from 'src/types/registrationForm.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL_SIGN_UP_FORM = 'registration-form/create'
const URL_GET_ALL = 'registration-form/get-all'

const registrationFormApi = {
  signUpNewInsurance: (body: newRegistrationFormType) => {
    return http.post<SuccessResponse>(URL_SIGN_UP_FORM, body)
  },
  getAll: (page: number, size: number) => {
    return http.get<ListRegistrationFormType>(`${URL_GET_ALL}?page=${page}&size==${size}`)
  }
}

export default registrationFormApi
