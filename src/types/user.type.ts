import * as yup from 'yup'

export const userSchema = yup.object({
  id: yup.number(),
  email: yup
    .string()
    .matches(/^[A-Za-z0-9]{1,30}@[a-z0-9]{2,10}(\.[a-z0-9]{2,10}){1,3}$/, 'Please re-enter a valid email address.')
    .required('You will use this information when you log in and when you need to reset your password.'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(
      6,
      'Enter a password with at least 6 characters that can include numbers, letters, and punctuation (like ! and &).'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirmation password does not match.')
    .required('Please confirm your password.'),
  lastName: yup.string().required('What is last name?'),
  firstName: yup.string().required('What is first name?'),
  phone: yup.string().required('Phone is required'),
  gender: yup.string(),
  avatar: yup.object().shape({
    url: yup.string()
  }),
  birthday: yup
    .date()
    .max(new Date(2019, 1, 1), 'Hình như bạn đã nhập sai thông tin. Hãy nhớ dùng ngày sinh thật của mình nhé.'),
  timeCreated: yup.date()
})

export type User = yup.InferType<typeof userSchema>

export type UserInfor = Pick<
  User,
  'email' | 'lastName' | 'firstName' | 'avatar' | 'phone' | 'gender' | 'birthday' | 'timeCreated'
>
