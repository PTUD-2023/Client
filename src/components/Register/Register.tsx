import { Button, CardBody, CardFooter, CardHeader, Input, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import { userSchema } from 'src/types/user.type'

export const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      password: '',
      confirmPassword: ''
    },
    initialTouched: {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      phone: false,
      confirmPassword: false
    },
    //validationSchema: userSchema,
    onSubmit: async (data) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      // const { day, month, year, ...rest } = data
      // await signupMutation.mutate(rest)
      console.log(data)
    }
  })

  return (
    <div>
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className='mb-4 flex flex-col justify-center items-center gap-2 place-items-center mt-4'
      >
        <Typography variant='h4' className='text-[#0c2964]'>
          WELLCOME
        </Typography>
        <span className='text-[#0c2964]'>Register new account!</span>
      </CardHeader>
      <CardBody className='mb-6'>
        <form id='form-register' onSubmit={formik.handleSubmit} className='flex flex-col gap-4 '>
          <Input
            id='my-email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            color='blue'
            label='Email'
            size='lg'
            crossOrigin={undefined}
          />
          <Input
            id='firstName'
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            color='blue'
            label='First Name'
            size='lg'
            crossOrigin={undefined}
          />
          <Input
            id='lastName'
            name='lastName'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            color='blue'
            label='Last Name'
            size='lg'
            crossOrigin={undefined}
          />
          <Input
            id='my-phone'
            name='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            color='blue'
            label='Phone'
            size='lg'
            crossOrigin={undefined}
          />
          <Input
            id='my-password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            color='blue'
            label='Confirm password'
            size='lg'
            crossOrigin={undefined}
            type='password'
          />
          <Input
            id='my-confirm-password'
            name='confirmPassword'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            color='blue'
            label='Password'
            size='lg'
            crossOrigin={undefined}
            type='password'
          />
        </form>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button
          type='submit'
          form='form-register'
          variant='gradient'
          color='blue'
          className='text-lg leading-5'
          fullWidth
        >
          Sign up
        </Button>
      </CardFooter>
    </div>
  )
}

export default Register
