import * as yup from 'yup'

export const userSchema = yup.object({
  id: yup.number(),
  email: yup
    .string()
    .matches(/^[A-Za-z0-9]{1,30}@[a-z0-9]{2,10}(\.[a-z0-9]{2,10}){1,3}$/, 'Vui lòng nhập lại địa chỉ email hợp lệ.')
    .required('Bạn sẽ sử dụng thông tin này khi đăng nhập và khi bạn cần đặt lại mật khẩu của mình.'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .min(6, 'Nhập mật khẩu có ít nhất 6 ký tự, có thể bao gồm số, chữ cái và dấu câu (như ! và &).'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không khớp.')
    .required('Vui lòng xác nhận mật khẩu của bạn.'),
  lastName: yup.string().required('Tên của bạn là gì?'),
  firstName: yup.string().required('Họ của bạn là gì?'),
  phone: yup.string().required('Hãy nhập số điện thoại'),
  gender: yup.string(),
  avatar: yup.object().shape({
    url: yup.string()
  }),
  role: yup.string(),
  birthday: yup
    .date()
    .max(new Date(2019, 1, 1), 'Hình như bạn đã nhập sai thông tin. Hãy nhớ dùng ngày sinh thật của mình nhé.'),
  timeCreated: yup.date()
})

export type User = yup.InferType<typeof userSchema>

export type UserInfor = Pick<
  User,
  'email' | 'lastName' | 'firstName' | 'avatar' | 'phone' | 'gender' | 'role' | 'birthday' | 'timeCreated'
>
