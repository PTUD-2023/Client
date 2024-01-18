// import {
//     Button,
//     IconButton,
//     Dialog,
//     DialogHeader,
//     DialogBody,
//     DialogFooter,
//     Select,
//     Option,
//     Input
// } from '@material-tailwind/react'
// import { useFormik } from 'formik'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestion } from '@fortawesome/free-solid-svg-icons';
// import { useState } from "react";
// import Support from "../../components/Support";
// import HomeHeader from "src/components/HomeHeader";

// const Request = () => {
//     const [isSupportVisible, setSupportVisible] = useState(false);

//     const formik = useFormik({
//         initialValues: {
//             amount: '',
//             request_date: new Date(),
//             request_content: '',
//         },
//         initialTouched: {
//             amount: false,
//             request_content: false,
//         },

//         onSubmit: async (data) => {
//             console.log(data)
//         }
//     })
//     const toggleSupportVisibility = () => {
//         setSupportVisible(!isSupportVisible);
//     };
//     return (
//         <div className="flex relative flex-col items-center relative">
//             <HomeHeader />
//             <div className="inline-flex gap-2.5 bg-white rounded-[25px] mb-[40px] shadow border-2 border-blue-900 mt-[80px] relative flex-col text-center " >
//                 <div className="text-center text-blue-900 text-4xl font-bold font-['Montserrat'] capitalize pt-[40px]">Yêu cầu</div>
//                 <form id='insurance-registration-form' onSubmit={formik.handleSubmit}>
//                     <div className='flex flex-col gap-2 justify-between items-center mb-[20px] mx-[40px]'>
//                         <div className='w-[400px]'>
//                             <Input
//                                 id='insurance-registration-form-name'
//                                 name='amount'
//                                 value={formik.values.amount}
//                                 onChange={formik.handleChange}
//                                 label='Tống số tiền'
//                                 size='lg'
//                                 variant="outlined"
//                                 crossOrigin={undefined}
//                                 color='blue'
//                             />
//                         </div>
//                         <div className='w-[400px]'>
//                             <Input
//                                 label='Nội dung yêu cầu thanh toán'
//                                 size='lg'
//                                 name='request_content'
//                                 className='h-[100px]'
//                                 value={formik.values.request_content}
//                                 onChange={formik.handleChange}
//                                 crossOrigin={undefined}
//                                 color='blue' />
//                         </div>
//                         <div className='w-[400px]'>
//                             <Select label='Loại chính sách' size='lg' color='blue'>
//                                 <Option>Loại A</Option>
//                                 <Option>Loại B</Option>
//                                 <Option>Loại C</Option>
//                                 <Option>Loại D</Option>
//                                 <Option>Loại E</Option>
//                             </Select>
//                         </div>
//                         <div className="flex w-full justify-end">
//                             <div className="flex w-fit h-fit bg-blue-900 rounded-[25px] shadow border-2 justify-center items-center gap-2.5">
//                                 <span className="text-white text-lg font-semibold font-['Montserrat'] px-[40px] py-[10px]">Gửi</span>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <div className="w-full flex mt-[20px] justify-center items-center flex bg-white">

//                 {/* <Slider/> */}
//             </div>
//             {/* Component Support */}
//             {isSupportVisible && (
//                 <div
//                     className="absolute bottom-[100px] right-[80px] z-50"
//                 >
//                     <Support />
//                 </div>
//             )}
//             <button
//                 onClick={toggleSupportVisibility}
//                 className="w-[50px] h-[50px] flex justify-center items-center absolute right-[60px] bottom-[40px] bg-blue-900 rounded-[50px]">
//                 <FontAwesomeIcon icon={faQuestion} className="text-2xl text-white" />
//             </button>
//         </div>
//     );
// }

// export default Request
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
import { useEffect, useState } from 'react'

interface Props {
  open: boolean
  handleOpen: () => void
}

const RequestForm = ({ open, handleOpen }: Props) => {
  const formik = useFormik({
    initialValues: {
      amount: '',
      request_date: new Date(),
      request_content: '',
      policy: ''
    },
    initialTouched: {
      amount: false,
      request_content: false,
      policy: false,
    },

    onSubmit: async (data) => {
      console.log(data)
    }
  });

  return (
    <Dialog open={open} dismiss={{ enabled: false }} handler={handleOpen} size='xs' className='w-[900px]'>
      <DialogHeader className='bg-white rounded-t-md h-[60px] p-0 block'>
        <div className=''>
          <div className='flex items-center h-[60px] border-b border-gray-300'>
            <div className='w-full flex justify-center'>
              <span className='text-[20px] text-[#050505] font-bold'>Thông tin yêu cầu thanh toán</span>
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
        <form id='insurance-registration-form' onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-2 justify-between items-center mb-[20px] mx-[40px]'>
            <div className='w-[400px]'>
              <Input
                id='insurance-registration-form-name'
                name='amount'
                value={formik.values.amount}
                onChange={formik.handleChange}
                label='Tống số tiền'
                size='lg'
                variant="outlined"
                crossOrigin={undefined}
                color='blue'
              />
            </div>
            <div className='w-[400px]'>
              <Input
                label='Nội dung yêu cầu thanh toán'
                size='lg'
                name='request_content'
                className='h-[100px]'
                value={formik.values.request_content}
                onChange={formik.handleChange}
                crossOrigin={undefined}
                color='blue' />
            </div>
            <div className='w-[400px]'>
              <Select
                label='Loại chính sách'
                name='policy'
                value={formik.values.policy}
                size='lg'
                color='blue'>
                <Option>Loại A</Option>
                <Option>Loại B</Option>
                <Option>Loại C</Option>
                <Option>Loại D</Option>
                <Option>Loại E</Option>
              </Select>
            </div>
          </div>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
          <span>Hủy</span>
        </Button>
        <Button form='insurance-registration-form' variant='gradient' color='green' size='md' type='submit' onClick={handleOpen}>
          <span>Xác nhận</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default RequestForm
