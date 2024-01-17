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
import dayjs from 'dayjs'
import { differenceInMilliseconds } from 'date-fns';
import DatePicker from '../DatePicker'
import facebookIcon3 from 'src/assets/Images/facbook_icon_3.png'
import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  handleOpen: () => void
}

const HeathInformationForm = ({ open, handleOpen }: Props) => {
  const [age, setAge] = useState('');

  // chỉnh lại formik
  const formikHealthInfor = useFormik({
    initialValues: {
      general_health_condition: '',
      medical_history: '',
      medicines_and_treatment: '',
      family_history: '',
      lifestyle_and_risk_factors: '',
    },
    initialTouched: {
      general_health_condition: false,
      medical_history: false,
      medicines_and_treatment: false,
      family_history: false,
      lifestyle_and_risk_factors: false,
    },

    onSubmit: async (data) => {
      console.log(data)
    }
  })
  return (
    <Dialog open={open} dismiss={{ enabled: false }} handler={handleOpen} size='xs' className='w-[600px]'>
      <DialogHeader className='bg-white rounded-t-md h-[60px] p-0 block'>
        <div className=''>
          <div className='flex items-center h-[60px] border-b border-gray-300'>
            <div className='w-full flex justify-center'>
              <span className='text-[20px] text-[#050505] font-bold'>Thông tin sức khỏe người nhận bảo hiểm</span>
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
      <DialogBody className='flex flex-col gap-4 w-full'>
        <form id='insurance-registration-form' onSubmit={formikHealthInfor.handleSubmit}>
          <div className='flex flex-col gap-2 justify-between items-center mb-[10px]'>
            <div className='w-[400px]'>
              <Input
                id='insurance-registration-form-name'
                name='general_health_condition'
                value={formikHealthInfor.values.general_health_condition}
                onChange={formikHealthInfor.handleChange}
                label='Tình trạng sức khỏe tổng quát'
                size='lg'
                variant="outlined"
                crossOrigin={undefined}
                color='blue'
              />
            </div>
            <div className='w-[400px] '>
              <Input
                label='Tiền sử bệnh lý' 
                size='lg'
                name='medical_history'
                value={formikHealthInfor.values.medical_history}
                onChange={formikHealthInfor.handleChange}
                crossOrigin={undefined}
                color='blue' />
            </div>
            <div className='w-[400px] '>
              <Input
                label='Thuốc và điều trị'
                size='lg'
                name='medicines_and_treatment'
                value={formikHealthInfor.values.medicines_and_treatment}
                onChange={formikHealthInfor.handleChange}
                crossOrigin={undefined}
                color='blue' />
            </div>
            <div className='w-[400px] '>
              <Input
                label='Lịch sử gia đình'
                size='lg'
                name='family_history'
                value={formikHealthInfor.values.family_history}
                onChange={formikHealthInfor.handleChange}
                crossOrigin={undefined}
                color='blue' />
            </div>
            <div className='w-[400px] '>
              <Input
                label='Lối sống và yếu tố rủi ro'
                size='lg'
                name='lifestyle_and_risk_factors'
                value={formikHealthInfor.values.lifestyle_and_risk_factors}
                onChange={formikHealthInfor.handleChange}
                crossOrigin={undefined}
                color='blue' />
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

export default HeathInformationForm
