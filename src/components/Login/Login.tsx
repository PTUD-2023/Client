import { Button, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'

interface Props {
  setIsLoginTab: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = ({ setIsLoginTab }: Props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: async (data) => {
      console.log(data)
      // await signInAccountMutation.mutate(data, {
      //   onSuccess: (res) => {
      //     // Khi login thành công thì sẽ gọi api get profile
      //     // Query key của hàm invalidateQueries match với query key của useQuery trên => Gọi API trên
      //     if (res.data.accessToken === '') {
      //       dispatch(updateTempAccountAction({ email: data.email, password: data.password, isConfirmed: false }))
      //       navigate('/authenticate/' + res.data.key)
      //     } else {
      //       queryClient.invalidateQueries({
      //         queryKey: ['profile']
      //       })
      //     }
      //   },
      //   onError: (error) => {
      //     if (isAxiosBadRequestError<ErrorResponse>(error)) {
      //       // Kiểm tra lỗi có phải từ API trả về không
      //       const formError = error.response?.data
      //       if (formError && formError.errorKey === 'EmailOrPasswordInValid') {
      //         setErrorMessage(formError.message)
      //       }
      //     }
      //   }
      // })
    }
  })

  return (
    <div>
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className='mb-10 flex flex-col justify-center items-center gap-2 place-items-center mt-10'
      >
        <Typography variant='h4' className='text-[#0c2964]'>
          WELLCOME
        </Typography>
        <span className='text-[#0c2964]'>
          New Here?{' '}
          <button className='text-[#3873f2]' onClick={() => setIsLoginTab(false)}>
            Create Account
          </button>
        </span>
      </CardHeader>
      <CardBody className='mb-6'>
        <form id='form-login' className='flex flex-col gap-4' onSubmit={formik.handleSubmit}>
          <Input
            type='text'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            color='blue'
            label='Email'
            size='lg'
            crossOrigin={undefined}
          />
          <Input
            id='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            color='blue'
            label='Password'
            size='lg'
            crossOrigin={undefined}
            type='password'
          />
        </form>
        <div className='flex justify-end mt-2'>
          <span className='text-[13px] text-[#3873f2]'>Forgot password ?</span>
        </div>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button form='form-login' type='submit' variant='gradient' color='blue' className='text-lg leading-5' fullWidth>
          Login
        </Button>
      </CardFooter>
    </div>
  )
}

export default Login
