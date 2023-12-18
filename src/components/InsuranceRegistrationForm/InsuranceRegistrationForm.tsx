import {
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Input
} from '@material-tailwind/react'
import { useFormik } from 'formik'
import facebookIcon3 from 'src/assets/Images/facbook_icon_3.png'

interface Props {
  open: boolean
  handleOpen: () => void
}

const InsuranceRegistrationForm = ({ open, handleOpen }: Props) => {
  // chỉnh lại formik
  const formik = useFormik({
    initialValues: {
      Name: '',
      lastName: '',
      email: '',
      password: '',
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      birthday: new Date()
    },
    initialTouched: {
      Name: false,
      lastName: false,
      email: false,
      password: false
    },

    onSubmit: async (data) => {
      console.log(data)
    }
  })
  return (
    <Dialog open={open} handler={handleOpen} size='xs' className='w-[900px]'>
      <DialogHeader className='bg-white rounded-t-md h-[60px] p-0 block'>
        <div className=''>
          <div className='flex items-center h-[60px] border-b border-gray-300'>
            <div className='w-full flex justify-center'>
              <span className='text-[20px] text-[#050505] font-bold'>Thông tin người mua bảo hiểm</span>
            </div>
            <div className='flex justify-end absolute w-full -ml-4'>
              <IconButton
                color='blue-gray'
                className=' bg-[#e4e6eb] rounded-full hover:bg-[#d8dadf] px-4'
                variant='text'
                onClick={handleOpen}
              >
                <div
                  style={{ backgroundImage: `url(${facebookIcon3})` }}
                  className='bg-[length:190px_186px] bg-[-22px_-110px] h-5 w-5 opacity-60'
                ></div>
              </IconButton>
            </div>
          </div>
        </div>
      </DialogHeader>
      <DialogBody className='flex flex-col gap-4'>
        <form id='insurance-registration-form' onSubmit={formik.handleSubmit}>
          <div className='flex gap-2 justify-between items-center mb-[10px]'>
            <div className='w-72'>
              <Select label='Mối quan hệ với người mua' size='lg' color='blue'>
                <Option>Bản thân</Option>
                <Option>Cha mẹ</Option>
                <Option>Vợ/chồng</Option>
                <Option>Anh/chị</Option>
                <Option>Con</Option>
              </Select>
            </div>
            <div className='w-72'>
              <Input
                id='insurance-registration-form-name'
                name='insurance-registration-form-name'
                value={formik.values.Name}
                onChange={formik.handleChange}
                label='Tên'
                size='lg' 
                variant="outlined"
                crossOrigin={undefined}
                color='blue'
              />
            </div>
            <div className='w-72 '>
              <Input label='Email' size='lg' crossOrigin={undefined} color='blue' />
            </div>
          </div>
          <div className='flex gap-2 justify-between items-center'>
            <div className='w-72 '>
              <Select label='Giới tính' size='lg' color='blue'>
                <Option>Nam</Option>
                <Option>Nữ</Option>
              </Select>
            </div>
            <div className='w-72 '>
              <Input label='Điện thoại' size='lg' crossOrigin={undefined} color='blue' />
            </div>
            <div className='w-72 '>
              <Input label='CMND/CCCD' size='lg' crossOrigin={undefined} color='blue' />
            </div>
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
          <span>Hủy</span>
        </Button>
        <Button form='insurance-registration-form' variant='gradient' color='green' size='md' type='submit'>
          <span>Xác nhận</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default InsuranceRegistrationForm
