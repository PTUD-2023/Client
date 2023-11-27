import * as yup from 'yup'

export const userSchema = yup.object({
  id: yup.number(),
  email: yup
    .string()
    .matches(/^[A-Za-z0-9]{1,30}@[a-z0-9]{2,10}(\.[a-z0-9]{2,10}){1,3}$/, 'Vui lòng nhập lại địa chỉ email hợp lệ.')
    .required('Bạn sẽ sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu.'),
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu của bạn')
    .min(6, 'Nhập mật khẩu có tối thiểu 6 ký tự có thể bao gồm số, chữ cái và dấu chấm câu (như ! và &).'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không khớp.')
    .required('Vui lòng xác nhận mật khẩu của bạn.'),
  lastName: yup.string().required('Tên của bạn là gì?'),
  firstName: yup.string().required('Họ của bạn là gì?'),
  phone: yup.string().required('Phone is required'),
  birthday: yup
    .date()
    .max(new Date(2019, 1, 1), 'Hình như bạn đã nhập sai thông tin. Hãy nhớ dùng ngày sinh thật của mình nhé.'),
  timeCreated: yup.date()
})

export type User = yup.InferType<typeof userSchema>

export type UserInfor = Pick<User, 'email' | 'lastName' | 'firstName' | 'phone' | 'timeCreated'>
